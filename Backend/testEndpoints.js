// Automated integration test for all backend endpoints
const BASE_URL = 'http://localhost:5000/api'

async function runTests() {
  console.log('Testing Express Backend Endpoints...\n')
  let passed = 0
  let failed = 0

  async function test(name, fn) {
    try {
      await fn()
      console.log(`✅ [PASS] ${name}`)
      passed++
    } catch (err) {
      console.error(`❌ [FAIL] ${name}:`, err.message)
      failed++
    }
  }

  // 1. Health
  await test('GET /api/health', async () => {
    const res = await fetch(`${BASE_URL}/health`)
    const data = await res.json()
    if (data.status !== 'online') throw new Error('Status not online')
  })

  // 2. User Profile
  await test('GET /api/user', async () => {
    const res = await fetch(`${BASE_URL}/user`)
    const json = await res.json()
    if (!json.success || json.data.name !== 'Alex Mercer') throw new Error('User profile mismatch')
  })

  // 3. User Onboarding
  await test('POST /api/user/onboarding', async () => {
    const res = await fetch(`${BASE_URL}/user/onboarding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ age: 26, height: 180, weight: 75, goal: 'Build Muscle', activityLevel: 'Very Active' })
    })
    const json = await res.json()
    if (!json.success || json.data.age !== 26) throw new Error('Onboarding failed')
  })

  // 4. Dashboard
  await test('GET /api/dashboard', async () => {
    const res = await fetch(`${BASE_URL}/dashboard`)
    const json = await res.json()
    if (!json.success || !json.data.dailyGoalPercent) throw new Error('Dashboard summary missing')
  })

  // 5. Workouts
  await test('GET /api/workouts', async () => {
    const res = await fetch(`${BASE_URL}/workouts`)
    const json = await res.json()
    if (!json.success || !json.data.exercises.length) throw new Error('Workouts list empty')
  })

  // 6. Start Workout
  await test('POST /api/workouts/start', async () => {
    const res = await fetch(`${BASE_URL}/workouts/start`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ workoutId: 'plan_morning_flow', durationMinutes: 45 })
    })
    const json = await res.json()
    if (!json.success || !json.data.sessionId) throw new Error('Start workout failed')
  })

  // 7. Diet
  await test('GET /api/diet', async () => {
    const res = await fetch(`${BASE_URL}/diet`)
    const json = await res.json()
    if (!json.success || !json.data.meals.length) throw new Error('Diet meals empty')
  })

  // 8. Log Meal
  await test('POST /api/diet/meals', async () => {
    const res = await fetch(`${BASE_URL}/diet/meals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Protein Shake', type: 'Snack', kcal: 220, protein: 30, carbs: 10, fat: 3 })
    })
    const json = await res.json()
    if (!json.success || json.data.meal.name !== 'Protein Shake') throw new Error('Log meal failed')
  })

  // 9. Hydration
  await test('POST /api/diet/hydration', async () => {
    const res = await fetch(`${BASE_URL}/diet/hydration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'increment', amount: 1 })
    })
    const json = await res.json()
    if (!json.success || typeof json.data.current !== 'number') throw new Error('Hydration log failed')
  })

  // 10. Calories
  await test('GET /api/calories', async () => {
    const res = await fetch(`${BASE_URL}/calories`)
    const json = await res.json()
    if (!json.success || !json.data.totalBurned) throw new Error('Calories summary failed')
  })

  // 11. Steps
  await test('GET /api/steps', async () => {
    const res = await fetch(`${BASE_URL}/steps`)
    const json = await res.json()
    if (!json.success || !json.data.todaySteps) throw new Error('Steps stats failed')
  })

  // 12. Log Steps
  await test('POST /api/steps', async () => {
    const res = await fetch(`${BASE_URL}/steps`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ steps: 500 })
    })
    const json = await res.json()
    if (!json.success) throw new Error('Log steps failed')
  })

  // 13. Progress
  await test('GET /api/progress', async () => {
    const res = await fetch(`${BASE_URL}/progress`)
    const json = await res.json()
    if (!json.success || !json.data.weight) throw new Error('Progress data failed')
  })

  // 14. Log Measurement
  await test('POST /api/progress/measurements', async () => {
    const res = await fetch(`${BASE_URL}/progress/measurements`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'Biceps', value: 38, unit: 'cm' })
    })
    const json = await res.json()
    if (!json.success) throw new Error('Log measurement failed')
  })

  console.log(`\nResults: ${passed} passed, ${failed} failed.`)
  if (failed > 0) process.exit(1)
}

runTests()
