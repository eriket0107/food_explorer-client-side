import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
