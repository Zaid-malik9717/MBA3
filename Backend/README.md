# FitnessFirst Wellness Backend API

Express.js REST API backend powering the FitnessFirst & Stitch Wellness application.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd Backend
npm install
```

### 2. Start the Server
- **Production / Standard Mode:**
  ```bash
  npm start
  ```
- **Development Mode (with auto-reload):**
  ```bash
  npm run dev
  ```

Default Port: `http://localhost:5000`

---

## 📡 API Endpoints Reference

### 1. System Health
- `GET /api/health` — Check server status and uptime.

### 2. User & Onboarding (`/api/user`)
- `GET /api/user` — Fetch user profile, focus goals, settings, and connected devices.
- `PUT /api/user` — Update profile info.
- `POST /api/user/onboarding` — Submit onboarding questionnaire (goal, age, height, weight, activity level).
- `PATCH /api/user/devices/:id` — Connect / disconnect wearable devices (e.g., Apple Watch, Fitbit).
- `PATCH /api/user/settings` — Update theme (Dark/Light), notifications, and privacy settings.

### 3. Dashboard (`/api/dashboard`)
- `GET /api/dashboard` — Aggregated daily goal completion, calories burned, steps, AI recovery insight, and weekly activity bar data.
- `PATCH /api/dashboard/stats` — Update live dashboard targets and counters.

### 4. Workouts (`/api/workouts`)
- `GET /api/workouts` — Get workout categories, featured plan, and exercise lists. Filter by `?category=Yoga|Strength|HIIT|Mobility`.
- `POST /api/workouts/start` — Start/complete a workout session (auto-updates burned calories).
- `POST /api/workouts/exercises` — Add custom exercise to library.

### 5. Diet & Nutrition (`/api/diet`)
- `GET /api/diet` — Get daily calorie targets, consumed calories, macronutrients (Protein, Carbs, Fat), meals log, and hydration.
- `POST /api/diet/meals` — Log a meal or snack (updates consumed calories & macros).
- `POST /api/diet/hydration` — Increment or update daily water intake.

### 6. Calories Burned (`/api/calories`)
- `GET /api/calories` — Total calories burned, goal percentage, breakdown by activity (Workout vs Walking), and weekly trend.
- `POST /api/calories/log` — Log an activity burn.

### 7. Step Counter (`/api/steps`)
- `GET /api/steps` — Today's step count, goal %, estimated distance (km), active minutes, and 7-day breakdown.
- `POST /api/steps` — Log or increment steps.

### 8. Progress & Metrics (`/api/progress`)
- `GET /api/progress` — Weight history, target weight, BMI, body fat %, body measurements (Chest, Waist), and badges/achievements.
- `POST /api/progress/measurements` — Log new body measurements.
- `POST /api/progress/weight` — Log weight updates and recalculate BMI automatically.

---

## 🛠️ Tech Stack
- **Runtime:** Node.js (ES Modules)
- **Framework:** Express.js 4.x
- **Middleware:** CORS, Morgan (HTTP request logger), Dotenv
- **Architecture:** Clean MVC (Routes, Controllers, Middleware, In-Memory Seeded Store)
