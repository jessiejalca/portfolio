import { useEffect, useRef } from "react"
import { NavLink, useLocation } from "react-router-dom"
const NAV_ITEMS = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <polyline points="9 21 9 12 15 12 15 21" />
      </svg>
    ),
  },
  {
    to: "/projects",
    label: "Projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    to: "/about",
    label: "About",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
]

const BottomNav = () => {
  const location = useLocation()
  const pagesRef = useRef(null)

  // Scroll active nav link into view on route change
  useEffect(() => {
    const active = pagesRef.current?.querySelector(".active")
    if (active) active.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
  }, [location.pathname])

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <div className="bottom-nav-pages" ref={pagesRef}>
        {NAV_ITEMS.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `bottom-nav-item${isActive ? " active" : ""}`} end>
            {icon}
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default BottomNav