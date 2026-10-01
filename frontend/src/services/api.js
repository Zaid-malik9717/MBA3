// Base API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

// Helper for fetch requests with automatic JSON parsing and error handling
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {})
  }

  try {
    const res = await fetch(url, { ...options, headers })
    const json = await res.json()
    if (!res.ok) {
      throw new Error(json.message || `Request failed with status ${res.status}`)
    }
    return json.data
  } catch (err) {
    console.warn(`API [${options.method || 'GET'} ${endpoint}] fallback error:`, err.message)
    throw err
  }
}

// ==================== User & Onboarding ====================
export const getUserProfile = () => request('/user')
export const updateUserProfile = (data) => request('/user', { method: 'PUT', body: JSON.stringify(data) })
export const submitOnboarding = (data) => request('/user/onboarding', { method: 'POST', body: JSON.stringify(data) })
export const toggleDevice = (deviceId) => request(`/user/devices/${deviceId}`, { method: 'PATCH' })
export const updateSettings = (settings) => request('/user/settings', { method: 'PATCH', body: JSON.stringify(settings) })

// ==================== Dashboard ====================
export const getDashboardSummary = () => request('/dashboard')
export const updateDashboardStats = (stats) => request('/dashboard/stats', { method: 'PATCH', body: JSON.stringify(stats) })

// ==================== Workouts ====================
export const getWorkouts = (category) => request(category ? `/workouts?category=${encodeURIComponent(category)}` : '/workouts')
export const startWorkout = (data) => request('/workouts/start', { method: 'POST', body: JSON.stringify(data || {}) })
export const addExercise = (exercise) => request('/workouts/exercises', { method: 'POST', body: JSON.stringify(exercise) })

// ==================== Diet & Hydration ====================
export const getDietPlan = () => request('/diet')
export const logMeal = (meal) => request('/diet/meals', { method: 'POST', body: JSON.stringify(meal) })
export const logHydration = (action = 'increment', amount = 1) => request('/diet/hydration', { method: 'POST', body: JSON.stringify({ action, amount }) })

// ==================== Calories ====================
export const getCalorieSummary = () => request('/calories')
export const logCalorieBurn = (data) => request('/calories/log', { method: 'POST', body: JSON.stringify(data) })

// ==================== Steps ====================
export const getStepStats = () => request('/steps')
export const logSteps = (steps) => request('/steps', { method: 'POST', body: JSON.stringify({ steps }) })

// ==================== Progress ====================
export const getProgressData = () => request('/progress')
export const logMeasurement = (measurement) => request('/progress/measurements', { method: 'POST', body: JSON.stringify(measurement) })
export const updateWeight = (data) => request('/progress/weight', { method: 'POST', body: JSON.stringify(data) })

export default {
  getUserProfile,
  updateUserProfile,
  submitOnboarding,
  toggleDevice,
  updateSettings,
  getDashboardSummary,
  updateDashboardStats,
  getWorkouts,
  startWorkout,
  addExercise,
  getDietPlan,
  logMeal,
  logHydration,
  getCalorieSummary,
  logCalorieBurn,
  getStepStats,
  logSteps,
  getProgressData,
  logMeasurement,
  updateWeight
}
