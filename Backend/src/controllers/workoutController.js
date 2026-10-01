import { store } from '../data/mockStore.js'

// @desc    Get workouts data, categories, featured plan, and exercises
// @route   GET /api/workouts
export const getWorkouts = (req, res) => {
  const { category } = req.query
  let exercises = store.workouts.exercises

  if (category && category !== 'All') {
    exercises = exercises.filter(
      (ex) => ex.category.toLowerCase() === category.toLowerCase()
    )
  }

  res.json({
    success: true,
    data: {
      categories: store.workouts.categories,
      featuredPlan: store.workouts.featuredPlan,
      exercises
    }
  })
}

// @desc    Start workout session
// @route   POST /api/workouts/start
export const startWorkout = (req, res) => {
  const { workoutId = 'plan_morning_flow', durationMinutes = 45 } = req.body

  // Increment user calories burned on workout start/completion
  const burnedKcal = 350
  store.dashboard.caloriesBurned += burnedKcal
  store.calories.totalBurned += burnedKcal

  // Find workout breakdown in calories and add
  const workoutBreakdown = store.calories.breakdown.find(b => b.type === 'Workout')
  if (workoutBreakdown) {
    workoutBreakdown.kcal += burnedKcal
  }

  res.json({
    success: true,
    message: 'Workout session started',
    data: {
      sessionId: `sess_${Date.now()}`,
      workoutId,
      estimatedBurn: burnedKcal,
      durationMinutes,
      startedAt: new Date().toISOString()
    }
  })
}

// @desc    Add new exercise
// @route   POST /api/workouts/exercises
export const addExercise = (req, res) => {
  const { name, sets, category, img } = req.body

  if (!name || !sets) {
    return res.status(400).json({ success: false, message: 'Name and sets are required' })
  }

  const newExercise = {
    id: `ex_${Date.now()}`,
    name,
    sets,
    category: category || 'Strength',
    img: img || "https://lh3.googleusercontent.com/aida-public/AB6AXuBSdYX3udGcJaBYqwAsgvSwNHTk4QNRmdYqj6dvCeXcWlRBP8iaTF9ufCmq0yzDLDQLmJHZ5_HopDXujB9GoMv9s_6s3peSq0MvuW0OLV455-oHy-VdYrz_c8OsMuKu_-UnUrJ5mxeK8tw7-7c0Jm7TSaaPqD2gKcj1sWjEu1PXznvWRT97G3X7xoevlCjkDI5Ih1fSqtSBd9TCfT6XR1VkwD7GaD4b0JoYdkDcUmCT9A31nncG98Cu"
  }

  store.workouts.exercises.push(newExercise)

  res.status(201).json({
    success: true,
    message: 'Exercise added successfully',
    data: newExercise
  })
}
