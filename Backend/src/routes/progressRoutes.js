import express from 'express'
import {
  getProgressData,
  logMeasurement,
  updateWeight
} from '../controllers/progressController.js'

const router = express.Router()

router.route('/')
  .get(getProgressData)

router.post('/measurements', logMeasurement)
router.post('/weight', updateWeight)

export default router
