// In-memory data store with helper methods
export const store = {
  user: {
    id: "user_001",
    name: "Alex Mercer",
    level: 24,
    title: "Urban Athlete",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lOFW73mE1uELQPbcnz28E__HtDkUMyhkDwAaICPN_sLRuEiIJ9Z0fwusMta9SvpshnPnT4O4FuTPcYQ5PzDpt42Qs9JOxyYE0LM-nZImntHxvGsGBCEoCU09NzjVNQemKInX1AIYdvlHsgjIl3YGxIDgQJpyA6mZrYadojVG9_tLd7dL94BsazVUsK0ApvBYN6LC81txr1QSwzPvz6yJM8zg8Le6MuiI2QT_2P_mPYPDDvmqQXlK",
    goal: "Build Muscle",
    goalId: 1,
    age: 25,
    height: 175,
    weight: 76.4,
    targetWeight: 75.0,
    activityLevel: "Lightly Active",
    activityLevelId: 1,
    currentFocus: "Endurance Base Phase",
    focusWeeksCompleted: 4,
    focusTotalWeeks: 6,
    devices: [
      { id: "dev_1", name: "Apple Watch", icon: "watch", status: "Syncing", connected: true },
      { id: "dev_2", name: "Fitbit", icon: "watch_screentime", status: "Disconnected", connected: false }
    ],
    settings: {
      darkMode: true,
      notifications: true,
      privacy: true,
      subscription: "PRO"
    }
  },

  dashboard: {
    dailyGoalPercent: 75,
    caloriesBurned: 640,
    caloriesTarget: 800,
    stepsToday: 8420,
    stepsTarget: 10000,
    aiInsight: {
      title: "Recovery Insight",
      description: "Your HRV indicates optimal recovery. Today is a great day for high-intensity interval training.",
      icon: "auto_awesome"
    },
    dietPlanSummary: {
      title: "Lean Muscle Prep",
      nextMeal: "Post-workout Shake",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdxldCWGp-3Iaf-UoDWQsH0B0v6EAldJmwJ3qR0GTZkRc2tl_mKTeCulunRLcc6qXDbsrpV_Yk9aQ8YFtQt4_NCBWb_hU-widYYHix_9XB_12-ve8bedPfCRwlpH_o3ZV74LBLI42RqlkQPQDkUI9bSdS7PQjvdLDFbfLuVfGz7D0DkVywPjHtiUmTVvhtLlC99e8ISHBXU-Sh5TDHPXdmCK2wH6rgQgBT2JknvHhLJ2nZ_0u_T1ac"
    },
    weeklyActivity: {
      days: ["M", "T", "W", "T", "F", "S"],
      heights: ["40%", "60%", "30%", "85%", "50%", "20%"],
      activeDayIndex: 3
    }
  },

  workouts: {
    categories: ["Strength", "HIIT", "Yoga", "Mobility"],
    featuredPlan: {
      id: "plan_morning_flow",
      title: "Morning Flow",
      subtitle: "Awaken your body and mind.",
      duration: "45 Min",
      calories: "350 Kcal",
      difficulty: "Medium",
      category: "Yoga",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Y8kS2IlS_y9emukLW5QZ6589d4gfJsgK7lPXMHap9KUl1kZApSbcxEgjFgrgikQ9dCUf5x69AGp0KjXphDQFwXsYVLuVV2yAXJTCKBTd9GyRlxwjnX6lQv2r76uxNPl46ZoyjapNM1gqgTEyY5F9fH_3D3RuPcbSQqC6sx3bG1UN1yasPT-FGTZxQ0yoGjjhAn7UgmFCAVTpPbAK7R1xQpnMnC62KYoWCVsC0xcJZXMqBI6X_lLz"
    },
    exercises: [
      {
        id: "ex_1",
        name: "Downward Dog",
        sets: "3 Sets • 60 Sec",
        category: "Yoga",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSdYX3udGcJaBYqwAsgvSwNHTk4QNRmdYqj6dvCeXcWlRBP8iaTF9ufCmq0yzDLDQLmJHZ5_HopDXujB9GoMv9s_6s3peSq0MvuW0OLV455-oHy-VdYrz_c8OsMuKu_-UnUrJ5mxeK8tw7-7c0Jm7TSaaPqD2gKcj1sWjEu1PXznvWRT97G3X7xoevlCjkDI5Ih1fSqtSBd9TCfT6XR1VkwD7GaD4b0JoYdkDcUmCT9A31nncG98Cu"
      },
      {
        id: "ex_2",
        name: "Warrior II",
        sets: "3 Sets • 45 Sec",
        category: "Yoga",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA276EZklgqb6qEseYGElJcvA0PfULWpOrqEorgcFUUmrY0_gNEmunpn7pUzvJdhMrxKJAkrfFVp53iexKDRkgIJhJTPEyvXJisQGRD46jXoBL4QXFrQPOIyjQbv5uUP0ijiEZQOupwgzL7NcNEKmjgxwiGj57m8GM0K_kWC3jszgXSJ77AgtAN3p527tuVO1RRmiAH43ru2cStNPtDnFddWyBJJg89Wsi-G5Wewf1AxSLRy72jASel"
      },
      {
        id: "ex_3",
        name: "Plank Hold",
        sets: "4 Sets • 30 Sec",
        category: "Strength",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfaSuIn0pL0tlS3TNCOHYLOm6W7rPOaC28QJxo3stnVe0uN8AlLDHDJv_MCjqNdy8FP5tV8qHLjKw7wEELJZf-PEkJoGbgMC7mop1gWZTLcJAvhXRnlaJdF8tJYx7tLoykF7PtEEiryY-GOpnHqQWVlRK2IoS7nJHWqJXKS2syb8xcBIrV7PdDzq4kJg6d23feP3l47I6TPTPrQZn_T7XZhxVk4k2htRh861ulQx3XvaW_ZevebTix"
      }
    ]
  },

  diet: {
    dailyTarget: 2200,
    consumed: 1450,
    macros: [
      { label: "PROTEIN", value: "120g", current: 120, target: 160, pct: "75%", color: "bg-tertiary" },
      { label: "CARBS", value: "250g", current: 250, target: 416, pct: "60%", color: "bg-error" },
      { label: "FAT", value: "65g", current: 65, target: 162, pct: "40%", color: "bg-secondary" }
    ],
    aiSuggestion: "Based on your morning workout, consider a high-protein dinner like Grilled Salmon with Quinoa.",
    meals: [
      {
        id: "m_1",
        name: "Avocado Toast",
        type: "Breakfast",
        kcal: 450,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5wQWYg90N5DJv9tBvoy7VW0ndSjMeQQveFG4q8gh-qDm9donHFiHc9TOnfaxd91VlIVUO5djnOlYMWTNyNsC-IYgnAGqHnrvZMP2CfrKVOhbghqkTswsSLBgQSUZTIS9vGvgOK9RslrURI_kVUDwTiwtOUDOHz9VEe80QjKY_oOFPwFnQhyVRPVAh68lU3QUVklsRAQESiLhToi6XMZ2O-E-2WJTa9lXFfQ-WhxVZIv575gpqPMsT"
      },
      {
        id: "m_2",
        name: "Chicken Salad",
        type: "Lunch",
        kcal: 520,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDpEPP8DizqWXvtLkFFdH8Y-QVB_vA-IxIYeOG-00Beev4iwgh_ALvcveSXzE3eIhRHw3NDGxOmFN8a_5e9zUvaR4lFZSe3q2j4dfEzJkSNOU_Vr6iSezEZuBgKbu06wY-9oLvW1glkpISz5qFK_vBzOVafubAtZdUOtlTJBAK4Evf6zrHU8Shh8bZj_d8DL4xFcEIfJeg5fTXZSmWUnhaptyL3IQxx-4pbmXgQmnulkPSOuUitme"
      }
    ],
    hydration: {
      current: 4,
      target: 8,
      unit: "glasses"
    }
  },

  calories: {
    totalBurned: 1850,
    dailyGoal: 2200,
    goalPercent: 84,
    breakdown: [
      { type: "Workout", kcal: 1250, percent: 67, icon: "fitness_center", colorClass: "bg-primary" },
      { type: "Walking", kcal: 600, percent: 33, icon: "directions_walk", colorClass: "bg-secondary-container" }
    ],
    weeklyTrend: {
      days: ["M", "T", "W", "T", "F", "S", "S"],
      heights: ["60%", "85%", "95%", "40%", "75%", "50%", "80%"],
      activeDayIndex: 2,
      avgDaily: "1.9k"
    }
  },

  steps: {
    todaySteps: 10542,
    dailyGoal: 12000,
    percent: 85,
    distanceKm: 7.2,
    activeMinutes: 45,
    weeklySteps: {
      days: ["M", "T", "W", "T", "F", "S", "S"],
      heights: ["40%", "60%", "50%", "80%", "75%", "90%", "85%"],
      activeDayIndex: 6,
      avgSteps: "8.4K"
    }
  },

  progress: {
    weight: {
      current: 76.4,
      target: 75.0,
      change: -1.2,
      unit: "kg",
      changeDirection: "down"
    },
    bmi: {
      value: 22.8,
      status: "Normal"
    },
    bodyFat: {
      value: 15.2,
      change: -0.4,
      status: "Down 0.4%"
    },
    measurements: [
      { id: "meas_1", name: "Chest", value: 102, unit: "cm", updated: "Last updated 2d ago" },
      { id: "meas_2", name: "Waist", value: 84, unit: "cm", updated: "Last updated 2d ago" }
    ],
    achievements: [
      {
        id: "ach_1",
        icon: "local_fire_department",
        title: "30 Day Streak",
        subtitle: "Unlocked Oct 12",
        gradient: "from-primary to-surface-container-highest",
        glow: true,
        locked: false
      },
      {
        id: "ach_2",
        icon: "fitness_center",
        title: "Heavy Lifter",
        subtitle: "Unlocked Sep 05",
        gradient: "from-tertiary to-surface-container-highest",
        glow: false,
        locked: false
      },
      {
        id: "ach_3",
        icon: "lock",
        title: "Marathoner",
        subtitle: "24/42 km",
        gradient: "",
        glow: false,
        locked: true
      }
    ]
  }
}
