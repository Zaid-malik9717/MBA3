import express from 'express'
import {
  getDietPlan,
  logMeal,
  logHydration
} from '../controllers/dietController.js'

const router = express.Router()

router.route('/')
  .get(getDietPlan)

router.post('/meals', logMeal)
router.post('/hydration', logHydration)

export default router
