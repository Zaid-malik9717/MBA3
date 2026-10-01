import { store } from '../data/mockStore.js'

// @desc    Get step counter metrics, distance, active minutes, and weekly graph
// @route   GET /api/steps
export const getStepStats = (req, res) => {
  const percent = Math.min(100, Math.round((store.steps.todaySteps / store.steps.dailyGoal) * 100))
  store.steps.percent = percent

  res.json({
    success: true,
    data: store.steps
  })
}

// @desc    Log or increment steps
// @route   POST /api/steps
export const logSteps = (req, res) => {
  const { steps = 1000 } = req.body

  store.steps.todaySteps += Number(steps)
  store.dashboard.stepsToday = store.steps.todaySteps

  // Calculate approximate km (approx 1350 steps per km) and active minutes (approx 100 steps/min)
  store.steps.distanceKm = Number((store.steps.todaySteps / 1464).toFixed(1))
  store.steps.activeMinutes = Math.round(store.steps.todaySteps / 234)
  store.steps.percent = Math.min(100, Math.round((store.steps.todaySteps / store.steps.dailyGoal) * 100))

  res.json({
    success: true,
    message: `${steps} steps added`,
    data: store.steps
  })
}
