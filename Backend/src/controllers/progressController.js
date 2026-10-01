import { store } from '../data/mockStore.js'

// @desc    Get progress overview: weight, BMI, body fat, measurements, achievements
// @route   GET /api/progress
export const getProgressData = (req, res) => {
  res.json({
    success: true,
    data: store.progress
  })
}

// @desc    Log new body measurement
// @route   POST /api/progress/measurements
export const logMeasurement = (req, res) => {
  const { name, value, unit = 'cm' } = req.body

  if (!name || value === undefined) {
    return res.status(400).json({ success: false, message: 'Measurement name and value are required' })
  }

  const existingIndex = store.progress.measurements.findIndex(
    m => m.name.toLowerCase() === name.toLowerCase()
  )

  const updatedItem = {
    id: existingIndex >= 0 ? store.progress.measurements[existingIndex].id : `meas_${Date.now()}`,
    name,
    value: Number(value),
    unit,
    updated: 'Just now',
    timestamp: new Date().toISOString()
  }

  if (existingIndex >= 0) {
    store.progress.measurements[existingIndex] = updatedItem
  } else {
    store.progress.measurements.push(updatedItem)
  }

  res.status(201).json({
    success: true,
    message: 'Measurement logged successfully',
    data: store.progress.measurements
  })
}

// @desc    Update current weight & recalculate BMI
// @route   POST /api/progress/weight
export const updateWeight = (req, res) => {
  const { weight, targetWeight } = req.body

  if (weight !== undefined) {
    const oldWeight = store.progress.weight.current
    const newWeight = Number(weight)
    store.progress.weight.current = newWeight
    store.user.weight = newWeight
    store.progress.weight.change = Number((newWeight - oldWeight).toFixed(1))
    store.progress.weight.changeDirection = store.progress.weight.change <= 0 ? 'down' : 'up'

    // Recalculate BMI
    if (store.user.height) {
      const heightM = store.user.height / 100
      const bmi = (newWeight / (heightM * heightM)).toFixed(1)
      store.progress.bmi.value = Number(bmi)
      store.progress.bmi.status = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : 'Overweight'
    }
  }

  if (targetWeight !== undefined) {
    store.progress.weight.target = Number(targetWeight)
    store.user.targetWeight = Number(targetWeight)
  }

  res.json({
    success: true,
    message: 'Weight and metrics updated successfully',
    data: store.progress
  })
}
