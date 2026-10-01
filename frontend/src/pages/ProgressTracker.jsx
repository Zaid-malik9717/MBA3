const achievements = [
  { icon: 'local_fire_department', title: '30 Day Streak', subtitle: 'Unlocked Oct 12', gradient: 'from-primary to-surface-container-highest', glow: true, locked: false },
  { icon: 'fitness_center', title: 'Heavy Lifter', subtitle: 'Unlocked Sep 05', gradient: 'from-tertiary to-surface-container-highest', glow: false, locked: false },
  { icon: 'lock', title: 'Marathoner', subtitle: '24/42 km', gradient: '', glow: false, locked: true },
]

const measurements = [
  { name: 'Chest', value: '102', unit: 'cm', updated: 'Last updated 2d ago' },
  { name: 'Waist', value: '84', unit: 'cm', updated: 'Last updated 2d ago' },
]

export default function ProgressTracker() {
  return (
    <>
      {/* Ambient Background Element */}
      <div className="fixed top-0 left-0 w-full h-[300px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none -z-10" />

      {/* Macro Overview Bento Grid */}
      <section className="grid grid-cols-2 gap-[16px]">
        {/* Current Weight Card */}
        <div className="col-span-2 glass-panel rounded-[12px] p-[24px] ambient-glow relative overflow-hidden flex flex-col justify-between h-[160px]">
          <div className="flex justify-between items-start w-full z-10">
            <span className="font-label-caps text-secondary uppercase tracking-widest">Weight</span>
            <div className="flex items-center gap-1 text-tertiary">
              <span className="material-symbols-outlined text-[16px]">trending_down</span>
              <span className="font-label-caps">-1.2 kg</span>
            </div>
          </div>
          <div className="z-10">
            <h2 className="font-headline-display text-on-background">
              76.4<span className="font-data-point text-secondary ml-1">kg</span>
            </h2>
            <p className="font-body-md text-secondary mt-1">Target: 75.0 kg</p>
          </div>
          {/* Abstract progress graphic */}
          <div className="absolute bottom-0 right-0 w-3/4 h-1/2 opacity-20 pointer-events-none">
            <svg className="w-full h-full stroke-primary fill-none stroke-[2]" preserveAspectRatio="none" viewBox="0 0 100 50">
              <path d="M0,40 Q20,30 40,35 T80,20 T100,5" />
            </svg>
          </div>
        </div>

        {/* BMI Card */}
        <div className="glass-panel rounded-[12px] p-[12px] flex flex-col justify-between h-[120px]">
          <div className="flex justify-between items-center">
            <span className="font-label-caps text-secondary uppercase">BMI</span>
            <span className="material-symbols-outlined text-secondary opacity-50 text-[18px]">monitor_weight</span>
          </div>
          <div>
            <div className="font-data-point text-on-background">22.8</div>
            <div className="font-label-caps text-primary mt-1">Normal</div>
          </div>
        </div>

        {/* Body Fat Card */}
        <div className="glass-panel rounded-[12px] p-[12px] flex flex-col justify-between h-[120px]">
          <div className="flex justify-between items-center">
            <span className="font-label-caps text-secondary uppercase">Body Fat</span>
            <span className="material-symbols-outlined text-secondary opacity-50 text-[18px]">water_drop</span>
          </div>
          <div>
            <div className="font-data-point text-on-background">15.2<span className="text-[14px] text-secondary ml-1">%</span></div>
            <div className="font-label-caps text-tertiary mt-1">Down 0.4%</div>
          </div>
        </div>
      </section>

      {/* Measurement Trends */}
      <section className="flex flex-col gap-[12px]">
        <h3 className="font-headline-md text-on-background mb-2">Measurements</h3>
        <div className="glass-panel rounded-[12px] flex flex-col divide-y divide-white/5">
          {measurements.map((m, i) => (
            <div key={i} className="flex justify-between items-center p-[24px]">
              <div className="flex items-center gap-[24px]">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">straighten</span>
                </div>
                <div>
                  <div className="font-body-lg text-on-background">{m.name}</div>
                  <div className="font-label-caps text-secondary">{m.updated}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-data-point text-on-background">
                  {m.value}<span className="text-[14px] text-secondary ml-1">{m.unit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full py-[12px] border border-outline-variant text-on-surface-variant font-body-md rounded-[8px] mt-2 hover:bg-surface-container-high transition-colors">
          Log New Measurements
        </button>
      </section>

      {/* Achievements Horizontal Scroll */}
      <section className="flex flex-col gap-[12px] -mx-[20px]">
        <div className="px-[20px]">
          <h3 className="font-headline-md text-on-background">Achievements</h3>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-[20px] gap-[24px] snap-x">
          {achievements.map((badge, i) => (
            <div key={i} className={`glass-panel rounded-[12px] p-[24px] min-w-[160px] snap-center flex flex-col items-center text-center gap-[12px] ${badge.locked ? 'opacity-50' : ''}`}>
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                badge.locked
                  ? 'bg-surface-container-highest border border-outline-variant'
                  : `bg-gradient-to-br ${badge.gradient}`
              } ${badge.glow ? 'shadow-[0_0_20px_rgba(255,180,170,0.3)]' : ''}`}>
                <span className={`material-symbols-outlined text-[32px] ${
                  badge.locked ? 'text-secondary' : (badge.gradient.includes('tertiary') ? 'text-on-tertiary-fixed' : 'text-white')
                }`}>{badge.icon}</span>
              </div>
              <div>
                <div className="font-data-point text-[16px] text-on-background leading-tight mb-1">{badge.title}</div>
                <div className="font-label-caps text-secondary">{badge.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
