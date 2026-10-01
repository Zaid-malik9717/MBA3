import { useState } from 'react'

const PROFILE_IMG = "https://lh3.googleusercontent.com/aida-public/AB6AXuA8Xlc_fY2_-jvVrE9stlNiQrdxF0_t-beQJS_sYPutuDr_9HVCV4bQnTeBX_D8xJJBmBF24U9o68xWS3fLHmPKFAjN-sQg1NnG94kca3l0JqdRadzgFAtjZcVB2eVRQa2Und-2yLG5_usXF7vzMSNbm6tcsIAO4h7Zhl94vOb52GLGbDQlUOcKFyfl6NWFsH9Y0w0-UglE5vXn1AauNgrwtQDhSFpPlJqxPhjCybzLRWnCv8daI-6e"

const settingsItems = [
  { icon: 'notifications_active', label: 'Notifications & Reminders', type: 'link' },
  { icon: 'lock', label: 'Privacy & Security', type: 'link' },
  { icon: 'workspace_premium', label: 'Subscription', type: 'link', badge: 'PRO' },
]

export default function UserProfile() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <>
      {/* Profile Header Section */}
      <section className="flex flex-col items-center gap-[24px]">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-surface-container-high ambient-glow shrink-0">
          <img className="w-full h-full object-cover" src={PROFILE_IMG} alt="Profile" />
          <div
            className="absolute inset-0 border-[3px] border-primary rounded-full"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 75%)' }}
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-headline-display text-on-background">Alex Mercer</h2>
          <p className="font-body-lg text-on-surface-variant mt-[4px]">Level 24 • Urban Athlete</p>
          <div className="mt-[24px] flex gap-[12px]">
            <button className="bg-primary hover:bg-primary-container text-on-primary font-body-md font-medium px-6 py-2 rounded-[8px] transition-colors">
              Edit Profile
            </button>
            <button className="border border-outline-variant hover:border-outline text-on-surface font-body-md font-medium px-6 py-2 rounded-[8px] transition-colors flex items-center gap-[4px]">
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>share</span>
              Share
            </button>
          </div>
        </div>
      </section>

      {/* Goal Summary Card */}
      <section className="bg-[#1C1C1E] rounded-[12px] p-[24px] glass-border flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
        <div className="flex justify-between items-start z-10">
          <div>
            <h3 className="font-label-caps text-on-surface-variant mb-[4px]">Current Focus</h3>
            <p className="font-headline-lg-mobile text-on-background">Endurance Base Phase</p>
          </div>
          <span className="material-symbols-outlined text-primary text-3xl">directions_run</span>
        </div>
        <div className="mt-[40px] z-10 flex flex-col gap-[12px]">
          <div className="flex justify-between items-end">
            <div>
              <span className="font-data-point text-on-background">4</span>
              <span className="font-body-md text-on-surface-variant ml-1">/ 6 Weeks</span>
            </div>
            <span className="font-label-caps text-primary">66% COMPLETED</span>
          </div>
          <div className="w-full h-2 bg-background rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full relative" style={{ width: '66%' }}>
              <div
                className="absolute inset-0 bg-white/20 w-full h-full"
                style={{ backgroundImage: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)', animation: 'shimmer 2s infinite' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Connected Devices Card */}
      <section className="bg-[#1C1C1E] rounded-[12px] p-[24px] glass-border flex flex-col gap-[24px]">
        <h3 className="font-label-caps text-on-surface-variant">Connected Devices</h3>
        <div className="flex flex-col gap-[12px]">
          <div className="flex items-center justify-between p-[12px] rounded-[8px] bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors">
            <div className="flex items-center gap-[12px]">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center">
                <span className="material-symbols-outlined text-on-surface">watch</span>
              </div>
              <div>
                <p className="font-body-md text-on-background font-medium">Apple Watch</p>
                <p className="font-label-caps text-primary mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> Syncing
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between p-[12px] rounded-[8px] bg-surface-container-low border border-transparent hover:border-outline-variant transition-colors">
            <div className="flex items-center gap-[12px]">
              <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-50">
                <span className="material-symbols-outlined text-on-surface">watch_screentime</span>
              </div>
              <div>
                <p className="font-body-md text-on-surface-variant font-medium">Fitbit</p>
                <p className="font-label-caps text-on-surface-variant opacity-60 mt-1">Disconnected</p>
              </div>
            </div>
            <button className="text-primary font-label-caps hover:opacity-80">CONNECT</button>
          </div>
        </div>
      </section>

      {/* Settings List Section */}
      <section className="bg-[#1C1C1E] rounded-[12px] p-0 glass-border overflow-hidden mb-[40px]">
        <h3 className="font-label-caps text-on-surface-variant px-[24px] pt-[24px] pb-[4px]">Account Settings</h3>
        <div className="flex flex-col">
          {/* Dark Mode Toggle */}
          <div
            className="flex items-center justify-between p-[24px] border-b border-surface-container-high hover:bg-surface-container-low transition-colors group cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="flex items-center gap-[12px]">
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">dark_mode</span>
              <p className="font-body-md text-on-background">App Theme (Dark Mode)</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer" onClick={(e) => e.stopPropagation()}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary" />
            </label>
          </div>

          {/* Other Settings */}
          {settingsItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className={`flex items-center justify-between p-[24px] hover:bg-surface-container-low transition-colors group ${
                i < settingsItems.length - 1 ? 'border-b border-surface-container-high' : ''
              }`}
            >
              <div className="flex items-center gap-[12px]">
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">{item.icon}</span>
                <p className="font-body-md text-on-background">
                  {item.label}
                  {item.badge && (
                    <span className="ml-2 font-label-caps bg-surface px-2 py-1 rounded-[4px] text-primary">{item.badge}</span>
                  )}
                </p>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant opacity-50">chevron_right</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
