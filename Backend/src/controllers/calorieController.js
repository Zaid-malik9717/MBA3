import { store } from '../data/mockStore.js'

// @desc    Get calories burned overview, breakdown and weekly trend
// @route   GET /api/calories
export const getCalorieSummary = (req, res) => {
  const percent = Math.min(100, Math.round((store.calories.totalBurned / store.calories.dailyGoal) * 100))
  store.calories.goalPercent = percent

  res.json({
    success: true,
    data: store.calories
  })
}

// @desc    Log calorie burn activity
// @route   POST /api/calories/log
export const logCalorieBurn = (req, res) => {
  const { type = 'Workout', kcal = 200 } = req.body

  store.calories.totalBurned += Number(kcal)
  store.dashboard.caloriesBurned += Number(kcal)
  store.calories.goalPercent = Math.min(100, Math.round((store.calories.totalBurned / store.calories.dailyGoal) * 100))

  // Find or create breakdown
  let breakdown = store.calories.breakdown.find(b => b.type.toLowerCase() === type.toLowerCase())
  if (breakdown) {
    breakdown.kcal += Number(kcal)
  } else {
    store.calories.breakdown.push({
      type,
      kcal: Number(kcal),
      percent: 15,
      icon: 'fitness_center',
      colorClass: 'bg-tertiary'
    })
  }

  // Recalculate percent in breakdown
  const sumBreakdown = store.calories.breakdown.reduce((sum, b) => sum + b.kcal, 0)
  store.calories.breakdown.forEach(b => {
    b.percent = Math.round((b.kcal / sumBreakdown) * 100)
  })

  res.status(201).json({
    success: true,
    message: 'Calorie burn logged successfully',
    data: store.calories
  })
}
