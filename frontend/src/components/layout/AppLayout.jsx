import { Outlet } from 'react-router-dom'
import TopAppBar from './TopAppBar'
import BottomNavBar from './BottomNavBar'

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background text-on-background antialiased">
      <TopAppBar />
      <main className="pt-24 pb-28 px-[20px] flex flex-col gap-[24px] max-w-[600px] mx-auto w-full">
        <Outlet />
      </main>
      <BottomNavBar />
    </div>
  )
}
