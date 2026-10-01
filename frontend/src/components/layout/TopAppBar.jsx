import { Link } from 'react-router-dom'

const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuB_lOFW73mE1uELQPbcnz28E__HtDkUMyhkDwAaICPN_sLRuEiIJ9Z0fwusMta9SvpshnPnT4O4FuTPcYQ5PzDpt42Qs9JOxyYE0LM-nZImntHxvGsGBCEoCU09NzjVNQemKInX1AIYdvlHsgjIl3YGxIDgQJpyA6mZrYadojVG9_tLd7dL94BsazVUsK0ApvBYN6LC81txr1QSwzPvz6yJM8zg8Le6MuiI2QT_2P_mPYPDDvmqQXlK"

export default function TopAppBar({ title = "Good morning, Alex", showBack = false, onBack }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[20px] h-16 bg-background/80 backdrop-blur-xl">
      <div className="flex items-center gap-[12px]">
        {showBack ? (
          <button
            onClick={onBack}
            className="w-10 h-10 flex items-center justify-start text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        ) : (
          <Link to="/dashboard" className="w-10 h-10 rounded-full overflow-hidden border border-white/10 bg-surface-container-high shrink-0">
            <img
              alt="User profile photo"
              className="w-full h-full object-cover"
              src={PROFILE_IMG}
            />
          </Link>
        )}
        <h1 className="font-headline-md font-bold text-primary truncate">{title}</h1>
      </div>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:opacity-80 transition-opacity active:scale-95">
        <span className="material-symbols-outlined">notifications</span>
      </button>
    </header>
  )
}
