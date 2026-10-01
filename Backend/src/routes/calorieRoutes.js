import express from 'express'
import {
  getCalorieSummary,
  logCalorieBurn
} from '../controllers/calorieController.js'

const router = express.Router()

router.route('/')
  .get(getCalorieSummary)

router.post('/log', logCalorieBurn)

export default router
