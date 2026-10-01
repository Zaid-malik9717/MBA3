import express from 'express'
import {
  getUserProfile,
  updateUserProfile,
  completeOnboarding,
  toggleDevice,
  updateSettings
} from '../controllers/userController.js'

const router = express.Router()

router.route('/')
  .get(getUserProfile)
  .put(updateUserProfile)

router.post('/onboarding', completeOnboarding)
router.patch('/devices/:id', toggleDevice)
router.patch('/settings', updateSettings)

export default router
