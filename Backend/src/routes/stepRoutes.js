import express from 'express'
import {
  getStepStats,
  logSteps
} from '../controllers/stepController.js'

const router = express.Router()

router.route('/')
  .get(getStepStats)
  .post(logSteps)

export default router
