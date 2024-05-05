import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet, useLocation } from "react-router-dom"
import { useAnimate } from "framer-motion"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

/* 
TASKS
- Make site responsive
- Add a dark mode toggle
  - Make dark mode persistent with local storage
  - Make dark mode default if user has dark mode enabled in their OS
- Toggle changes
  - Turn off cursor animation on mobile
  - Consider making toggle for all animations
- Add projects
- Add page transitions
*/

function App() {
  const location = useLocation()
  const [scope, animate] = useAnimate()
  const [showCursor, setShowCursor] = useState(
    localStorage.getItem("showCursor") === "true" // Get the initial state from localStorage
  )
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    animate(scope.current, { opacity: 0, opacity: 1 }, { duration: 1 })
  }, [location])

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode)
  }, [darkMode])

  // Toggle the animated cursor on and off
  const handleToggle = () => {
    const newShowCursor = !showCursor
    setShowCursor(newShowCursor)
    localStorage.setItem("showCursor", newShowCursor) // Save the new state to localStorage
  }

  // Toggle dark mode on and off
  const handleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode) // Save the new state to localStorage
  }

  return (
    <div className="App">
      {showCursor ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={68}
          innerScale={1.8}
          outerScale={0.22}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "#46B1C9",
          }}
          outerStyle={{
            border: "1px solid #46B1C9",
            backgroundColor: "#46B1C91A",
          }}
          showSystemCursor={true}
        />
      ) : (
        ""
      )}
      <NavBar setCursor={handleToggle} cursorStatus={showCursor} darkMode />
      <div ref={scope}>
        <Outlet context={[darkMode, setDarkMode]} />
      </div>
      <Footer darkMode />
    </div>
  )
}

export default App
