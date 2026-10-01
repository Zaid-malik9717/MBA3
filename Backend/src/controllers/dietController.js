import { store } from '../data/mockStore.js'

// @desc    Get diet overview, target, macros, meals & hydration
// @route   GET /api/diet
export const getDietPlan = (req, res) => {
  res.json({
    success: true,
    data: store.diet
  })
}

// @desc    Log a meal or snack
// @route   POST /api/diet/meals
export const logMeal = (req, res) => {
  const { name, type = 'Snack', kcal = 250, img, protein = 15, carbs = 30, fat = 10 } = req.body

  if (!name) {
    return res.status(400).json({ success: false, message: 'Meal name is required' })
  }

  const newMeal = {
    id: `m_${Date.now()}`,
    name,
    type,
    kcal: Number(kcal),
    img: img || "https://lh3.googleusercontent.com/aida-public/AB6AXuC5wQWYg90N5DJv9tBvoy7VW0ndSjMeQQveFG4q8gh-qDm9donHFiHc9TOnfaxd91VlIVUO5djnOlYMWTNyNsC-IYgnAGqHnrvZMP2CfrKVOhbghqkTswsSLBgQSUZTIS9vGvgOK9RslrURI_kVUDwTiwtOUDOHz9VEe80QjKY_oOFPwFnQhyVRPVAh68lU3QUVklsRAQESiLhToi6XMZ2O-E-2WJTa9lXFfQ-WhxVZIv575gpqPMsT"
  }

  store.diet.meals.push(newMeal)
  store.diet.consumed += Number(kcal)

  // Update macros
  const proteinMacro = store.diet.macros.find(m => m.label === 'PROTEIN')
  const carbsMacro = store.diet.macros.find(m => m.label === 'CARBS')
  const fatMacro = store.diet.macros.find(m => m.label === 'FAT')

  if (proteinMacro) {
    proteinMacro.current += Number(protein)
    proteinMacro.value = `${proteinMacro.current}g`
    proteinMacro.pct = `${Math.min(100, Math.round((proteinMacro.current / proteinMacro.target) * 100))}%`
  }
  if (carbsMacro) {
    carbsMacro.current += Number(carbs)
    carbsMacro.value = `${carbsMacro.current}g`
    carbsMacro.pct = `${Math.min(100, Math.round((carbsMacro.current / carbsMacro.target) * 100))}%`
  }
  if (fatMacro) {
    fatMacro.current += Number(fat)
    fatMacro.value = `${fatMacro.current}g`
    fatMacro.pct = `${Math.min(100, Math.round((fatMacro.current / fatMacro.target) * 100))}%`
  }

  res.status(201).json({
    success: true,
    message: 'Meal logged successfully',
    data: {
      meal: newMeal,
      diet: store.diet
    }
  })
}

// @desc    Update / increment water hydration intake
// @route   POST /api/diet/hydration
export const logHydration = (req, res) => {
  const { action = 'increment', amount = 1 } = req.body

  if (action === 'increment') {
    store.diet.hydration.current = Math.min(
      store.diet.hydration.target + 4,
      store.diet.hydration.current + Number(amount)
    )
  } else if (action === 'decrement') {
    store.diet.hydration.current = Math.max(0, store.diet.hydration.current - Number(amount))
  } else if (action === 'set') {
    store.diet.hydration.current = Number(amount)
  }

  res.json({
    success: true,
    message: 'Hydration updated',
    data: store.diet.hydration
  })
}
