import express from 'express'
import {
  getDashboardSummary,
  updateDashboardStats
} from '../controllers/dashboardController.js'

const router = express.Router()

router.route('/')
  .get(getDashboardSummary)

router.patch('/stats', updateDashboardStats)

export default router
