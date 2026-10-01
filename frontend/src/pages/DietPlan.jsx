const AVOCADO_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuC5wQWYg90N5DJv9tBvoy7VW0ndSjMeQQveFG4q8gh-qDm9donHFiHc9TOnfaxd91VlIVUO5djnOlYMWTNyNsC-IYgnAGqHnrvZMP2CfrKVOhbghqkTswsSLBgQSUZTIS9vGvgOK9RslrURI_kVUDwTiwtOUDOHz9VEe80QjKY_oOFPwFnQhyVRPVAh68lU3QUVklsRAQESiLhToi6XMZ2O-E-2WJTa9lXFfQ-WhxVZIv575gpqPMsT"
const CHICKEN_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuAWDpEPP8DizqWXvtLkFFdH8Y-QVB_vA-IxIYeOG-00Beev4iwgh_ALvcveSXzE3eIhRHw3NDGxOmFN8a_5e9zUvaR4lFZSe3q2j4dfEzJkSNOU_Vr6iSezEZuBgKbu06wY-9oLvW1glkpISz5qFK_vBzOVafubAtZdUOtlTJBAK4Evf6zrHU8Shh8bZj_d8DL4xFcEIfJeg5fTXZSmWUnhaptyL3IQxx-4pbmXgQmnulkPSOuUitme"

const macros = [
  { label: 'PROTEIN', value: '120g', pct: '75%', color: 'bg-tertiary' },
  { label: 'CARBS', value: '250g', pct: '60%', color: 'bg-error' },
  { label: 'FAT', value: '65g', pct: '40%', color: 'bg-secondary' },
]

const meals = [
  { name: 'Avocado Toast', type: 'Breakfast', kcal: 450, img: AVOCADO_IMG },
  { name: 'Chicken Salad', type: 'Lunch', kcal: 520, img: CHICKEN_IMG },
]

export default function DietPlan() {
  return (
    <>
      {/* Today's Overview */}
      <section className="flex flex-col gap-[12px]">
        <div className="glass-card rounded-[12px] p-[24px] flex flex-col justify-between h-48 ambient-glow relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div>
            <h2 className="font-label-caps text-on-surface-variant mb-[4px]">DAILY TARGET</h2>
            <div className="flex items-end gap-[4px]">
              <span className="font-headline-display text-on-background">2,200</span>
              <span className="font-body-md text-on-surface-variant mb-2">kcal</span>
            </div>
          </div>
          <div className="flex items-center gap-[24px]">
            <div className="flex-1">
              <div className="flex justify-between font-label-caps text-on-surface-variant mb-[4px]">
                <span>Consumed</span>
                <span className="text-on-background">1,450 kcal</span>
              </div>
              <div className="h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '65%' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Macros Grid */}
        <div className="grid grid-cols-3 gap-[12px]">
          {macros.map((m, i) => (
            <div key={i} className="glass-card rounded-[8px] p-[12px] flex flex-col items-center justify-center gap-[4px]">
              <span className="font-label-caps text-on-surface-variant">{m.label}</span>
              <span className="font-data-point text-on-background">{m.value}</span>
              <div className="w-full h-1 bg-surface-container-high rounded-full mt-1">
                <div className={`h-full ${m.color} rounded-full`} style={{ width: m.pct }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI Recommendation Card */}
      <section>
        <div className="glass-card rounded-[12px] p-[24px] border border-primary/30 relative overflow-hidden flex gap-[12px] items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary icon-fill">auto_awesome</span>
          </div>
          <div className="flex-1">
            <h3 className="font-data-point text-on-background mb-[4px]">AI Suggestion</h3>
            <p className="font-body-md text-on-surface-variant line-clamp-2">
              Based on your morning workout, consider a high-protein dinner like Grilled Salmon with Quinoa.
            </p>
          </div>
          <button className="text-primary hover:opacity-80 transition-opacity">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Meals List */}
      <section className="flex flex-col gap-[12px]">
        <h2 className="font-headline-md text-on-background mb-[4px]">Meals</h2>
        {meals.map((meal, i) => (
          <div key={i} className="glass-card rounded-[8px] p-[12px] flex items-center gap-[12px] cursor-pointer hover:bg-surface-container-high/50 transition-colors">
            <div className="w-16 h-16 rounded-[8px] overflow-hidden bg-surface-container-high shrink-0">
              <img alt={meal.name} className="w-full h-full object-cover" src={meal.img} />
            </div>
            <div className="flex-1">
              <h3 className="font-data-point text-on-background">{meal.name}</h3>
              <p className="font-body-md text-on-surface-variant">{meal.type}</p>
            </div>
            <div className="text-right">
              <span className="font-data-point text-on-background block">{meal.kcal}</span>
              <span className="font-label-caps text-on-surface-variant">KCAL</span>
            </div>
          </div>
        ))}
        {/* Add Snack */}
        <button className="w-full rounded-[8px] border border-dashed border-outline-variant p-[24px] flex items-center justify-center gap-[4px] text-on-surface-variant hover:text-primary hover:border-primary transition-colors">
          <span className="material-symbols-outlined">add</span>
          <span className="font-body-md">Log Snack</span>
        </button>
      </section>

      {/* Water Tracker Widget */}
      <section className="mt-[12px] mb-[24px]">
        <div className="glass-card rounded-[12px] p-[24px] flex items-center justify-between">
          <div>
            <h3 className="font-data-point text-on-background mb-[4px]">Hydration</h3>
            <p className="font-body-md text-on-surface-variant">4 of 8 glasses</p>
          </div>
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-8 h-10 rounded-sm border border-tertiary bg-tertiary/20 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-full bg-tertiary/60" />
              </div>
            ))}
            {[...Array(2)].map((_, i) => (
              <div key={i + 4} className="w-8 h-10 rounded-sm border border-outline-variant bg-surface-container-low" />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
