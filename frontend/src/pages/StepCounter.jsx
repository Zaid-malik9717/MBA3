import { useEffect, useRef, useState } from 'react'

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const barHeights = ['40%', '60%', '50%', '80%', '75%', '90%', '85%']

export default function StepCounter() {
  const [displayCount, setDisplayCount] = useState(0)
  const [ringOffset, setRingOffset] = useState(283)
  const animationRef = useRef(null)

  useEffect(() => {
    const targetNumber = 10542
    const duration = 1500
    const frameRate = 1000 / 60
    const totalFrames = Math.round(duration / frameRate)
    let frame = 0

    const easeOutQuart = (t) => 1 - Math.pow(1 - t, 4)

    animationRef.current = setInterval(() => {
      frame++
      const progress = easeOutQuart(frame / totalFrames)
      const currentNumber = Math.round(targetNumber * progress)
      setDisplayCount(currentNumber)

      if (frame >= totalFrames) {
        clearInterval(animationRef.current)
        setDisplayCount(targetNumber)
      }
    }, frameRate)

    // Animate ring
    const ringTimer = setTimeout(() => {
      const radius = 45
      const circumference = radius * 2 * Math.PI
      const percent = 85
      const offset = circumference - (percent / 100) * circumference
      setRingOffset(offset)
    }, 100)

    return () => {
      clearInterval(animationRef.current)
      clearTimeout(ringTimer)
    }
  }, [])

  return (
    <>
      {/* Hero: Step Counter Ring */}
      <section className="relative w-full flex flex-col items-center justify-center py-[24px]">
        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full w-3/4 h-3/4 m-auto z-0 pointer-events-none" />
        <div className="relative z-10 w-64 h-64 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full drop-shadow-xl" viewBox="0 0 100 100">
            <circle className="text-surface-container-high" cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
            <circle
              className="text-primary progress-ring__circle"
              cx="50" cy="50" r="45" fill="none" stroke="currentColor"
              strokeDasharray="283" strokeDashoffset={ringOffset}
              strokeLinecap="round" strokeWidth="6"
            />
          </svg>
          <div className="flex flex-col items-center text-center">
            <span className="font-label-caps text-secondary mb-1">TODAY'S STEPS</span>
            <h2 className="font-headline-display text-on-surface tracking-tighter">
              {displayCount.toLocaleString('en-US')}
            </h2>
            <div className="flex items-center gap-[4px] mt-2 text-primary">
              <span className="material-symbols-outlined text-[16px] icon-fill">local_fire_department</span>
              <span className="font-data-point">85%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bento Grid */}
      <section className="grid grid-cols-2 gap-[12px]">
        {/* Distance Card */}
        <div className="glass-panel rounded-[12px] p-[24px] flex flex-col gap-[4px] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-between text-secondary mb-2">
            <span className="font-label-caps">DISTANCE</span>
            <span className="material-symbols-outlined text-[18px]">route</span>
          </div>
          <div className="flex items-baseline gap-[4px]">
            <span className="font-headline-lg-mobile text-on-surface">7.2</span>
            <span className="font-body-md text-secondary">km</span>
          </div>
        </div>

        {/* Active Minutes Card */}
        <div className="glass-panel rounded-[12px] p-[24px] flex flex-col gap-[4px] relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="flex items-center justify-between text-secondary mb-2">
            <span className="font-label-caps">ACTIVE</span>
            <span className="material-symbols-outlined text-[18px]">timer</span>
          </div>
          <div className="flex items-baseline gap-[4px]">
            <span className="font-headline-lg-mobile text-on-surface">45</span>
            <span className="font-body-md text-secondary">min</span>
          </div>
        </div>
      </section>

      {/* Weekly Graph */}
      <section className="glass-panel rounded-[12px] p-[24px] flex flex-col gap-[24px]">
        <div className="flex justify-between items-end">
          <h3 className="font-headline-md text-on-surface">This Week</h3>
          <span className="font-label-caps text-primary">AVG 8.4K</span>
        </div>
        <div className="h-32 flex items-end justify-between gap-2 mt-4 relative">
          {/* Background grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between border-b border-surface-container-high pb-[20px] pointer-events-none">
            <div className="w-full border-t border-white/5 h-px" />
            <div className="w-full border-t border-white/5 h-px" />
            <div className="w-full border-t border-white/5 h-px" />
          </div>
          {/* Bars */}
          <div className="w-full flex justify-between items-end z-10 h-full pb-[24px]">
            {barHeights.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group w-8 relative h-full justify-end">
                <div
                  className={`w-full rounded-t-sm transition-colors ${
                    i === 6 ? 'bg-primary ambient-glow' : 'bg-surface-container-high group-hover:bg-surface-container-highest'
                  }`}
                  style={{ height: h }}
                >
                  {i === 6 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </div>
                <span className={`font-label-caps text-[10px] absolute bottom-0 ${i === 6 ? 'text-primary font-bold' : 'text-secondary'}`}>
                  {weekDays[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
