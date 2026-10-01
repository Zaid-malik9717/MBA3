import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', icon: 'home_app_logo', label: 'Home' },
  { to: '/workouts', icon: 'fitness_center', label: 'Workouts' },
  { to: '/diet', icon: 'restaurant', label: 'Diet' },
  { to: '/progress', icon: 'monitoring', label: 'Progress' },
  { to: '/profile', icon: 'person', label: 'Profile' },
]

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe h-20 bg-surface-container-lowest/70 backdrop-blur-2xl">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-16 h-full gap-1 transition-all duration-300 ease-out ${
              isActive
                ? 'text-primary font-bold scale-110'
                : 'text-secondary opacity-60 hover:opacity-100'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span
                className="material-symbols-outlined text-2xl"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="font-label-caps text-[10px]">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}
