import { Link } from 'react-router-dom'

const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lOFW73mE1uELQPbcnz28E__HtDkUMyhkDwAaICPN_sLRuEiIJ9Z0fwusMta9SvpshnPnT4O4FuTPcYQ5PzDpt42Qs9JOxyYE0LM-nZImntHxvGsGBCEoCU09NzjVNQemKInX1AIYdvlHsgjIl3YGxIDgQJpyA6mZrYadojVG9_tLd7dL94BsazVUsK0ApvBYN6LC81txr1QSwzPvz6yJM8zg8Le6MuiI2QT_2P_mPYPDDvmqQXlK"
const DIET_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuDdxldCWGp-3Iaf-UoDWQsH0B0v6EAldJmwJ3qR0GTZkRc2tl_mKTeCulunRLcc6qXDbsrpV_Yk9aQ8YFtQt4_NCBWb_hU-widYYHix_9XB_12-ve8bedPfCRwlpH_o3ZV74LBLI42RqlkQPQDkUI9bSdS7PQjvdLDFbfLuVfGz7D0DkVywPjHtiUmTVvhtLlC99e8ISHBXU-Sh5TDHPXdmCK2wH6rgQgBT2JknvHhLJ2nZ_0u_T1ac"

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S']
const barHeights = ['40%', '60%', '30%', '85%', '50%', '20%']

export default function HomeDashboard() {
  return (
    <>
      {/* Progress Ring & Main Stats Bento */}
      <section className="grid grid-cols-2 gap-[12px]">
        {/* Daily Goal Ring */}
        <div className="col-span-2 glass-card-solid rounded-[24px] p-[24px] flex flex-col items-center justify-center relative glow-shadow min-h-[220px]">
          <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none">
            <div className="w-[300px] h-[300px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5 rounded-full blur-2xl" />
          </div>
          <div className="relative w-40 h-40 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#291715" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="45" fill="none" stroke="#ffb4aa"
                strokeWidth="8" strokeLinecap="round"
                strokeDasharray="282.7" strokeDashoffset="70.6"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-headline-md text-primary">75%</span>
              <span className="font-label-caps text-on-surface-variant mt-1">DAILY GOAL</span>
            </div>
          </div>
        </div>

        {/* Calories Burned */}
        <div className="glass-card-solid rounded-[20px] p-[12px] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-[12px] text-primary">
            <span className="material-symbols-outlined text-[20px]">local_fire_department</span>
            <span className="font-label-caps">CALORIES</span>
          </div>
          <div>
            <div className="font-data-point text-on-surface">640</div>
            <div className="font-body-md text-on-surface-variant text-[14px]">/ 800 kcal</div>
          </div>
        </div>

        {/* Steps Today */}
        <div className="glass-card-solid rounded-[20px] p-[12px] flex flex-col justify-between">
          <div className="flex items-center gap-2 mb-[12px] text-tertiary">
            <span className="material-symbols-outlined text-[20px]">directions_walk</span>
            <span className="font-label-caps text-on-surface-variant">STEPS</span>
          </div>
          <div>
            <div className="font-data-point text-on-surface">8,420</div>
            <div className="font-body-md text-on-surface-variant text-[14px]">/ 10k steps</div>
          </div>
        </div>
      </section>

      {/* Quick Start CTA */}
      <Link
        to="/workouts"
        className="w-full bg-primary-container text-white font-body-md font-medium h-14 rounded-[12px] flex items-center justify-center gap-2 active:scale-95 transition-transform duration-200"
      >
        <span className="material-symbols-outlined">play_arrow</span>
        Quick Start Workout
      </Link>

      {/* AI Insight Card */}
      <section className="glass-card-solid rounded-[20px] p-[12px] border border-primary/20 relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-start gap-[12px] relative z-10">
          <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-[18px]">auto_awesome</span>
          </div>
          <div>
            <h3 className="font-data-point text-[16px] leading-[20px] font-semibold text-on-surface mb-1">Recovery Insight</h3>
            <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed">
              Your HRV indicates optimal recovery. Today is a great day for high-intensity interval training.
            </p>
          </div>
        </div>
      </section>

      {/* Continue Diet Plan */}
      <section className="glass-card-solid rounded-[20px] overflow-hidden flex flex-col">
        <div className="h-32 w-full bg-surface-container-high relative">
          <img
            alt="Diet Plan"
            className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
            src={DIET_IMG}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent" />
          <div className="absolute bottom-[12px] left-[12px] right-[12px] flex justify-between items-end">
            <div>
              <span className="font-label-caps text-on-surface-variant mb-1 block">DIET PLAN</span>
              <h3 className="font-data-point text-on-surface">Lean Muscle Prep</h3>
            </div>
            <span className="material-symbols-outlined text-on-surface bg-black/40 backdrop-blur-sm p-1 rounded-full">restaurant</span>
          </div>
        </div>
        <div className="p-[12px] flex justify-between items-center border-t border-white/5">
          <div className="font-body-md text-on-surface-variant text-[14px]">Next: Post-workout Shake</div>
          <Link to="/diet" className="text-primary font-body-md font-medium text-[14px]">Log Meal</Link>
        </div>
      </section>

      {/* Weekly Activity Chart */}
      <section className="glass-card-solid rounded-[20px] p-[12px] mb-[40px]">
        <div className="flex justify-between items-center mb-[24px]">
          <h3 className="font-data-point text-[18px] text-on-surface">Activity</h3>
          <span className="font-label-caps text-on-surface-variant">THIS WEEK</span>
        </div>
        <div className="h-24 w-full flex items-end justify-between gap-1 px-2">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={`w-1/6 rounded-t-sm transition-colors ${
                i === 3 ? 'bg-primary glow-shadow' : 'bg-surface-container-high hover:bg-surface-variant'
              }`}
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2 px-2 text-on-surface-variant font-label-caps text-[10px]">
          {weekDays.map((d, i) => (
            <span key={i} className={i === 3 ? 'text-primary' : ''}>{d}</span>
          ))}
        </div>
      </section>
    </>
  )
}
