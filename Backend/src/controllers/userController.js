import { store } from '../data/mockStore.js'

// @desc    Get user profile
// @route   GET /api/user
export const getUserProfile = (req, res) => {
  res.json({
    success: true,
    data: store.user
  })
}

// @desc    Update user profile
// @route   PUT /api/user
export const updateUserProfile = (req, res) => {
  const updates = req.body
  store.user = {
    ...store.user,
    ...updates
  }

  res.json({
    success: true,
    message: 'Profile updated successfully',
    data: store.user
  })
}

// @desc    Submit onboarding questionnaire
// @route   POST /api/user/onboarding
export const completeOnboarding = (req, res) => {
  const { goalId, goal, age, height, weight, activityLevel, activityLevelId } = req.body

  if (goal) store.user.goal = goal
  if (goalId !== undefined) store.user.goalId = Number(goalId)
  if (age) store.user.age = Number(age)
  if (height) store.user.height = Number(height)
  if (weight) {
    store.user.weight = Number(weight)
    store.progress.weight.current = Number(weight)
    // Recalculate BMI if height is available
    if (store.user.height) {
      const heightInMeters = store.user.height / 100
      const bmiVal = (store.user.weight / (heightInMeters * heightInMeters)).toFixed(1)
      store.progress.bmi.value = Number(bmiVal)
    }
  }
  if (activityLevel) store.user.activityLevel = activityLevel
  if (activityLevelId !== undefined) store.user.activityLevelId = Number(activityLevelId)

  res.status(201).json({
    success: true,
    message: 'Onboarding completed successfully',
    data: store.user
  })
}

// @desc    Toggle connected device status
// @route   PATCH /api/user/devices/:id
export const toggleDevice = (req, res) => {
  const { id } = req.params
  const device = store.user.devices.find(d => d.id === id)

  if (!device) {
    return res.status(404).json({ success: false, message: 'Device not found' })
  }

  device.connected = !device.connected
  device.status = device.connected ? 'Syncing' : 'Disconnected'

  res.json({
    success: true,
    message: `Device ${device.name} is now ${device.status.toLowerCase()}`,
    data: device
  })
}

// @desc    Update user app settings
// @route   PATCH /api/user/settings
export const updateSettings = (req, res) => {
  const { darkMode, notifications, privacy, subscription } = req.body
  
  if (darkMode !== undefined) store.user.settings.darkMode = darkMode
  if (notifications !== undefined) store.user.settings.notifications = notifications
  if (privacy !== undefined) store.user.settings.privacy = privacy
  if (subscription !== undefined) store.user.settings.subscription = subscription

  res.json({
    success: true,
    message: 'Settings updated',
    data: store.user.settings
  })
}
