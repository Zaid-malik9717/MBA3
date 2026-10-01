const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuBdLsJ9vBZUO5x6HYkLk-FWamizpKQRFR8UHIwlIg0rqMHNnGqDp1zPOGchhkCtPjicaiNcM3Bm7Tii6GQVDF7gkc7nL23fOWagDig-q6Ltaok9qBJVbicUt7FQlMl1RZZcfDQR5JRqvRqPr6MY8uO4FClLEiTY0iXUORx4Tc2jYP_Kqn1CRkrrzGnrXQzVYHnpv3LB4HrWbq5uEZFi3Wn6n0sTl2AR9MVXYrXIqEnVuBQ8rw8-iPFX"

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const barHeights = ['60%', '85%', '95%', '40%', '75%', '50%', '80%']

export default function CaloriesBurned() {
  return (
    <>
      {/* Hero Metrics Card */}
      <section className="glass-card rounded-[12px] p-[24px] flex flex-col items-center justify-center relative overflow-hidden ambient-glow border-t-white/20 border-t">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <span className="font-label-caps text-on-surface-variant uppercase mb-[4px] z-10">Total Calories Burned</span>
        <div className="flex items-baseline gap-[4px] z-10">
          <span className="font-headline-display text-primary">1,850</span>
          <span className="font-data-point text-on-surface-variant">kcal</span>
        </div>
        <div className="mt-[24px] w-full flex justify-between items-center bg-surface-container/50 rounded-[8px] p-[12px] border border-white/5 z-10">
          <div className="flex flex-col">
            <span className="font-label-caps text-on-surface-variant">Daily Goal</span>
            <span className="font-data-point text-on-surface">
              2,200 <span className="text-sm font-body-md text-on-surface-variant">kcal</span>
            </span>
          </div>
          <div className="w-12 h-12 relative flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-surface-container-high"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeWidth="4"
              />
              <path
                className="text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none" stroke="currentColor" strokeDasharray="84, 100" strokeLinecap="round" strokeWidth="4"
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-on-surface">84%</span>
          </div>
        </div>
      </section>

      {/* Breakdown Bento Grid */}
      <section className="grid grid-cols-2 gap-[12px]">
        {/* Workout Breakdown */}
        <div className="glass-card rounded-[12px] p-[12px] flex flex-col gap-[12px] border-t-white/10 border-t">
          <div className="flex items-center gap-[4px] text-on-surface-variant">
            <span className="material-symbols-outlined text-xl icon-fill">fitness_center</span>
            <span className="font-label-caps uppercase">Workout</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg-mobile text-on-surface">1,250</span>
            <span className="font-body-md text-on-surface-variant">kcal</span>
          </div>
          <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[67%] rounded-full" />
          </div>
        </div>

        {/* Walking Breakdown */}
        <div className="glass-card rounded-[12px] p-[12px] flex flex-col gap-[12px] border-t-white/10 border-t">
          <div className="flex items-center gap-[4px] text-on-surface-variant">
            <span className="material-symbols-outlined text-xl icon-fill">directions_walk</span>
            <span className="font-label-caps uppercase">Walking</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-lg-mobile text-on-surface">600</span>
            <span className="font-body-md text-on-surface-variant">kcal</span>
          </div>
          <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-secondary-container w-[33%] rounded-full" />
          </div>
        </div>
      </section>

      {/* Weekly Trend Chart */}
      <section className="glass-card rounded-[12px] p-[24px] flex flex-col gap-[12px] border-t-white/10 border-t">
        <div className="flex justify-between items-center mb-[12px]">
          <h2 className="font-data-point text-on-surface">Weekly Trend</h2>
          <span className="font-label-caps text-primary bg-primary/10 px-2 py-1 rounded-[4px]">Avg: 1.9k</span>
        </div>
        <div className="h-32 w-full flex items-end justify-between gap-1 relative mt-[12px]">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
            <div className="w-full h-px bg-white border-dashed" />
          </div>
          {/* Bars */}
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={`w-full rounded-t-sm ${
                i === 2 ? 'bg-primary ambient-glow' : 'bg-primary/20'
              }`}
              style={{ height: h }}
            />
          ))}
        </div>
        <div className="flex justify-between text-on-surface-variant font-label-caps mt-2 px-1">
          {weekDays.map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
      </section>
    </>
  )
}
