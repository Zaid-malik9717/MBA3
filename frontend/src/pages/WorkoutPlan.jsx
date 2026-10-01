import { useState } from 'react'

const FEATURED_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC2Y8kS2IlS_y9emukLW5QZ6589d4gfJsgK7lPXMHap9KUl1kZApSbcxEgjFgrgikQ9dCUf5x69AGp0KjXphDQFwXsYVLuVV2yAXJTCKBTd9GyRlxwjnX6lQv2r76uxNPl46ZoyjapNM1gqgTEyY5F9fH_3D3RuPcbSQqC6sx3bG1UN1yasPT-FGTZxQ0yoGjjhAn7UgmFCAVTpPbAK7R1xQpnMnC62KYoWCVsC0xcJZXMqBI6X_lLz"

const categories = ['Strength', 'HIIT', 'Yoga', 'Mobility']

const exercises = [
  {
    name: 'Downward Dog',
    sets: '3 Sets • 60 Sec',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSdYX3udGcJaBYqwAsgvSwNHTk4QNRmdYqj6dvCeXcWlRBP8iaTF9ufCmq0yzDLDQLmJHZ5_HopDXujB9GoMv9s_6s3peSq0MvuW0OLV455-oHy-VdYrz_c8OsMuKu_-UnUrJ5mxeK8tw7-7c0Jm7TSaaPqD2gKcj1sWjEu1PXznvWRT97G3X7xoevlCjkDI5Ih1fSqtSBd9TCfT6XR1VkwD7GaD4b0JoYdkDcUmCT9A31nncG98Cu",
  },
  {
    name: 'Warrior II',
    sets: '3 Sets • 45 Sec',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA276EZklgqb6qEseYGElJcvA0PfULWpOrqEorgcFUUmrY0_gNEmunpn7pUzvJdhMrxKJAkrfFVp53iexKDRkgIJhJTPEyvXJisQGRD46jXoBL4QXFrQPOIyjQbv5uUP0ijiEZQOupwgzL7NcNEKmjgxwiGj57m8GM0K_kWC3jszgXSJ77AgtAN3p527tuVO1RRmiAH43ru2cStNPtDnFddWyBJJg89Wsi-G5Wewf1AxSLRy72jASel",
  },
  {
    name: 'Plank Hold',
    sets: '4 Sets • 30 Sec',
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfaSuIn0pL0tlS3TNCOHYLOm6W7rPOaC28QJxo3stnVe0uN8AlLDHDJv_MCjqNdy8FP5tV8qHLjKw7wEELJZf-PEkJoGbgMC7mop1gWZTLcJAvhXRnlaJdF8tJYx7tLoykF7PtEEiryY-GOpnHqQWVlRK2IoS7nJHWqJXKS2syb8xcBIrV7PdDzq4kJg6d23feP3l47I6TPTPrQZn_T7XZhxVk4k2htRh861ulQx3XvaW_ZevebTix",
  },
]

export default function WorkoutPlan() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <>
      {/* Categories */}
      <section>
        <div className="flex gap-[12px] overflow-x-auto hide-scrollbar pb-2">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2 rounded-full glass-card font-body-md font-medium whitespace-nowrap ${
                activeCategory === idx
                  ? 'border-primary/50 text-primary'
                  : 'text-on-surface-variant'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Workout */}
      <section>
        <h2 className="font-headline-md text-on-surface mb-[24px]">Featured Plan</h2>
        <div className="glass-card rounded-[12px] overflow-hidden ambient-glow relative">
          <div
            className="h-48 w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url('${FEATURED_IMG}')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1E] to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-headline-lg-mobile text-on-background mb-1">Morning Flow</h3>
              <p className="font-body-md text-on-surface-variant">Awaken your body and mind.</p>
            </div>
          </div>
          <div className="p-[24px] flex justify-between items-center border-t border-white/5">
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="font-label-caps uppercase">45 Min</span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">local_fire_department</span>
                <span className="font-label-caps uppercase">350 Kcal</span>
              </div>
            </div>
            <span className="font-label-caps text-tertiary px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/20">Medium</span>
          </div>
        </div>
      </section>

      {/* Exercise List */}
      <section>
        <div className="flex justify-between items-end mb-[24px]">
          <h2 className="font-headline-md text-on-surface">Exercises</h2>
          <span className="font-label-caps text-on-surface-variant uppercase">8 Movements</span>
        </div>
        <div className="space-y-[12px]">
          {exercises.map((ex, idx) => (
            <div key={idx} className="glass-card p-4 rounded-[8px] flex items-center gap-4">
              <div
                className="w-16 h-16 rounded-[8px] bg-surface-container-high bg-cover bg-center shrink-0"
                style={{ backgroundImage: `url('${ex.img}')` }}
              />
              <div className="flex-1">
                <h4 className="font-body-lg font-medium text-on-surface">{ex.name}</h4>
                <p className="font-label-caps text-on-surface-variant mt-1">{ex.sets}</p>
              </div>
              <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">play_arrow</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="pt-6 pb-8">
        <button className="w-full bg-primary-container text-white font-body-lg font-medium py-4 rounded-[16px] hover:opacity-90 active:scale-95 transition-all shadow-[0_0_32px_rgba(255,85,69,0.3)]">
          Start Workout
        </button>
      </div>
    </>
  )
}
