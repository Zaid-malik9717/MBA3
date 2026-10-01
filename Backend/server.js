import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'

// Load environment variables
dotenv.config()

// Import database connection
import { connectDB } from './src/config/db.js'

// Connect to Database
connectDB()

// Import routes
import userRoutes from './src/routes/userRoutes.js'
import dashboardRoutes from './src/routes/dashboardRoutes.js'
import workoutRoutes from './src/routes/workoutRoutes.js'
import dietRoutes from './src/routes/dietRoutes.js'
import calorieRoutes from './src/routes/calorieRoutes.js'
import stepRoutes from './src/routes/stepRoutes.js'
import progressRoutes from './src/routes/progressRoutes.js'

// Import middlewares
import { errorHandler, notFound } from './src/middleware/errorHandler.js'

const app = express()
const PORT = process.env.PORT || 5000

// Core Middlewares
app.use(cors({
  origin: '*', // Permissive in development for seamless local connection
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    service: 'FitnessFirst Wellness API',
    uptime: process.uptime()
  })
})

// API Routes
app.use('/api/user', userRoutes)
app.use('/api/dashboard', dashboardRoutes)
app.use('/api/workouts', workoutRoutes)
app.use('/api/diet', dietRoutes)
app.use('/api/calories', calorieRoutes)
app.use('/api/steps', stepRoutes)
app.use('/api/progress', progressRoutes)

// Root fallback
app.get('/', (req, res) => {
  res.send('FitnessFirst Wellness Backend API is running. Access endpoints under /api/')
})

// Error handlers
app.use(notFound)
app.use(errorHandler)

// Server listener
app.listen(PORT, () => {
  console.log(`========================================`)
  console.log(` FitnessFirst API Server running on port ${PORT}`)
  console.log(` Health Check: http://localhost:${PORT}/api/health`)
  console.log(` Environment:  ${process.env.NODE_ENV || 'development'}`)
  console.log(`========================================`)
})

export default app
