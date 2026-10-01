import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/layout/AppLayout'
import WelcomeOnboarding from './pages/WelcomeOnboarding'
import HomeDashboard from './pages/HomeDashboard'
import WorkoutPlan from './pages/WorkoutPlan'
import DietPlan from './pages/DietPlan'
import CaloriesBurned from './pages/CaloriesBurned'
import StepCounter from './pages/StepCounter'
import ProgressTracker from './pages/ProgressTracker'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Routes>
      {/* Onboarding — standalone layout (no nav bars) */}
      <Route path="/" element={<WelcomeOnboarding />} />

      {/* Main app pages — wrapped with shared layout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<HomeDashboard />} />
        <Route path="/workouts" element={<WorkoutPlan />} />
        <Route path="/diet" element={<DietPlan />} />
        <Route path="/calories" element={<CaloriesBurned />} />
        <Route path="/steps" element={<StepCounter />} />
        <Route path="/progress" element={<ProgressTracker />} />
        <Route path="/profile" element={<UserProfile />} />
      </Route>
    </Routes>
  )
}

export default App
