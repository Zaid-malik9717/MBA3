import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HERO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC-Z0ARKre30QU0tttBph0BeTA_oh8f5o1BkyNeC8JAOdW4JFXfe3-L86Zci0kicbmB7EMuJcP49IvXNOIg5uVtz6UrN6IGtO3kFQbsRlVCdaIbKeaiUdjmWlga2bAmB5VURyQmnX64sVSnd-nIl-1X1sovqB2tUZKQ0naOxtbB2_Jfm6f69MZxSCtkLunYIlrYJSfjxA7CDpd12CfwDwULtitjsV5ZwIOYp0iuysFabH--UY715uu4"

const goals = [
  { icon: 'monitor_weight', title: 'Lose Weight', subtitle: 'Burn fat & tone up' },
  { icon: 'fitness_center', title: 'Build Muscle', subtitle: 'Increase strength & mass' },
  { icon: 'directions_run', title: 'Stay Active', subtitle: 'Maintain daily movement' },
  { icon: 'favorite', title: 'Improve Health', subtitle: 'Focus on longevity & vitals' },
]

const activityLevels = ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active']

export default function WelcomeOnboarding() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedGoal, setSelectedGoal] = useState(1) // Default "Build Muscle"
  const [selectedActivity, setSelectedActivity] = useState(1) // Default "Lightly Active"

  const goToStep2 = () => setCurrentStep(2)
  const goToStep1 = () => setCurrentStep(1)
  const completeOnboarding = () => navigate('/dashboard')

  return (
    <div className="bg-background text-on-background min-h-screen w-full overflow-hidden relative antialiased">
      {/* SCREEN 1: WELCOME & GOALS */}
      <div
        className={`view-section ${
          currentStep === 1 ? 'view-active' : 'view-hidden-left'
        }`}
      >
        {/* Hero Illustration */}
        <div className="relative w-full h-[45vh] min-h-[300px] mb-[24px] shrink-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMG}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full px-[20px] pb-[12px]">
            <h1 className="font-headline-lg-mobile text-on-background mb-[4px]">
              Welcome to <span className="text-primary">&nbsp;Fitnessfirst</span>
            </h1>
            <p className="font-body-md text-on-surface-variant">What is your primary focus?</p>
          </div>
        </div>

        {/* Goal Selection List */}
        <div className="px-[20px] flex flex-col gap-[16px] pb-[64px]">
          {goals.map((goal, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGoal(idx)}
              className={`w-full rounded-[24px] p-[24px] flex items-center justify-between text-left transition-all active:scale-[0.98]
                bg-surface-container-low/50 backdrop-blur-md border border-white/10
                ${selectedGoal === idx ? 'goal-option selected shadow-ambient-primary' : 'goal-option'}
              `}
            >
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">{goal.icon}</span>
                </div>
                <div>
                  <h3 className="font-data-point text-on-background">{goal.title}</h3>
                  <p className="font-label-caps text-secondary mt-1">{goal.subtitle}</p>
                </div>
              </div>
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  selectedGoal === idx ? 'border-primary' : 'border-outline-variant'
                }`}
              >
                <div
                  className="w-3 h-3 rounded-full bg-primary transition-opacity"
                  style={{ opacity: selectedGoal === idx ? 1 : 0 }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* SCREEN 2: DATA COLLECTION */}
      <div
        className={`view-section bg-background ${
          currentStep === 2 ? 'view-active' : 'view-hidden-right'
        }`}
      >
        {/* Header & Progress */}
        <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md">
          <div className="flex items-center px-[20px] h-16">
            <button
              onClick={goToStep1}
              className="w-10 h-10 flex items-center justify-start text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="flex-1 flex justify-center">
              <span className="font-label-caps text-secondary">STEP 2 OF 3</span>
            </div>
            <div className="w-10" />
          </div>
          <div className="w-full px-[20px] pb-[12px]">
            <div className="w-full h-[2px] bg-surface-container-highest rounded-full overflow-hidden">
              <div className="w-1/2 h-full bg-primary rounded-full shadow-ambient-primary" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-[20px] pt-[24px] pb-[64px]">
          <h2 className="font-headline-md text-on-background mb-[40px]">Tell us about yourself</h2>
          <form className="flex flex-col gap-[40px]" onSubmit={(e) => e.preventDefault()}>
            {/* Age & Height */}
            <div className="flex gap-[16px]">
              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-label-caps text-on-surface-variant" htmlFor="age">Age</label>
                <div className="relative">
                  <input
                    className="w-full h-14 bg-surface-container-low border-none rounded-[12px] text-on-background font-data-point px-[12px] placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-colors text-center appearance-none"
                    id="age"
                    placeholder="25"
                    type="number"
                  />
                  <span className="absolute right-[12px] top-1/2 -translate-y-1/2 font-label-caps text-secondary pointer-events-none">YRS</span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] flex-1">
                <label className="font-label-caps text-on-surface-variant" htmlFor="height">Height</label>
                <div className="relative">
                  <input
                    className="w-full h-14 bg-surface-container-low border-none rounded-[12px] text-on-background font-data-point px-[12px] placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-colors text-center appearance-none"
                    id="height"
                    placeholder="175"
                    type="number"
                  />
                  <span className="absolute right-[12px] top-1/2 -translate-y-1/2 font-label-caps text-secondary pointer-events-none">CM</span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-label-caps text-on-surface-variant" htmlFor="weight">Current Weight</label>
              <div className="relative w-1/2">
                <input
                  className="w-full h-14 bg-surface-container-low border-none rounded-[12px] text-on-background font-data-point px-[12px] placeholder:text-on-surface-variant/30 focus:ring-1 focus:ring-primary focus:bg-surface-container-high transition-colors text-center appearance-none"
                  id="weight"
                  placeholder="70.5"
                  type="number"
                />
                <span className="absolute right-[12px] top-1/2 -translate-y-1/2 font-label-caps text-secondary pointer-events-none">KG</span>
              </div>
            </div>

            <div className="h-px w-full bg-surface-container-high" />

            {/* Activity Level Chips */}
            <div className="flex flex-col gap-[8px]">
              <label className="font-label-caps text-on-surface-variant mb-[4px]">Activity Level</label>
              <div className="flex flex-wrap gap-[12px]">
                {activityLevels.map((level, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedActivity(idx)}
                    className={`px-[24px] py-[12px] rounded-full border font-body-md transition-colors ${
                      selectedActivity === idx
                        ? 'border-primary bg-primary/10 text-primary shadow-ambient-primary'
                        : 'border-outline-variant text-secondary hover:bg-surface-container-low'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Floating Action Area */}
      <div className="fixed bottom-0 left-0 w-full p-[20px] bg-gradient-to-t from-background via-background/90 to-transparent z-50 pb-[calc(20px+env(safe-area-inset-bottom,0px))] pointer-events-none">
        {currentStep === 1 ? (
          <button
            onClick={goToStep2}
            className="w-full h-14 bg-primary text-on-primary font-body-lg font-medium rounded-[12px] flex items-center justify-center gap-[12px] shadow-ambient-primary active:scale-[0.98] transition-transform pointer-events-auto"
          >
            <span>Continue</span>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        ) : (
          <button
            onClick={completeOnboarding}
            className="w-full h-14 bg-primary text-on-primary font-body-lg font-medium rounded-[12px] flex items-center justify-center gap-[12px] shadow-ambient-primary active:scale-[0.98] transition-transform pointer-events-auto"
          >
            <span>Complete Profile</span>
            <span className="material-symbols-outlined icon-fill">check_circle</span>
          </button>
        )}
      </div>
    </div>
  )
}
