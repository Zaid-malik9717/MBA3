import express from 'express'
import {
  getWorkouts,
  startWorkout,
  addExercise
} from '../controllers/workoutController.js'

const router = express.Router()

router.route('/')
  .get(getWorkouts)

router.post('/start', startWorkout)
router.post('/exercises', addExercise)

export default router
