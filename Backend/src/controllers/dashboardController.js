import { store } from '../data/mockStore.js'

// @desc    Get aggregated dashboard summary
// @route   GET /api/dashboard
export const getDashboardSummary = (req, res) => {
  // Compute dynamic daily goal progress
  const calPercent = Math.min(100, Math.round((store.dashboard.caloriesBurned / store.dashboard.caloriesTarget) * 100))
  const stepPercent = Math.min(100, Math.round((store.dashboard.stepsToday / store.dashboard.stepsTarget) * 100))
  const avgGoalPercent = Math.round((calPercent + stepPercent) / 2)

  const dashboardData = {
    ...store.dashboard,
    dailyGoalPercent: avgGoalPercent,
    user: {
      name: store.user.name,
      avatar: store.user.avatar,
      level: store.user.level,
      title: store.user.title
    }
  }

  res.json({
    success: true,
    data: dashboardData
  })
}

// @desc    Update dashboard goal progress
// @route   PATCH /api/dashboard/stats
export const updateDashboardStats = (req, res) => {
  const { caloriesBurned, stepsToday, caloriesTarget, stepsTarget } = req.body

  if (caloriesBurned !== undefined) store.dashboard.caloriesBurned = Number(caloriesBurned)
  if (stepsToday !== undefined) store.dashboard.stepsToday = Number(stepsToday)
  if (caloriesTarget !== undefined) store.dashboard.caloriesTarget = Number(caloriesTarget)
  if (stepsTarget !== undefined) store.dashboard.stepsTarget = Number(stepsTarget)

  res.json({
    success: true,
    message: 'Dashboard stats updated',
    data: store.dashboard
  })
}
