import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

/* 
TASKS
- Create a custom 404 page
- Fix framer motion animations
- Consider adding some flourishes
  - Patterned or even animated background
  - Gradient h1 text
  - "Currently listening" feature with Spotify API
- Consider some layout changes
  - Make the navbar sticky
  - Add a scroll progress bar
  - Convert to a single-page app
*/

function App() {
  const location = useLocation()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [showCursor, setShowCursor] = useState(
    localStorage.getItem("showCursor") === "true" // Get the initial state from localStorage
  )
  const [darkMode, setDarkMode] = useState(
    window.matchMedia && // Check if the browser supports matchMedia
      window.matchMedia("(prefers-color-scheme: dark)").matches // Check if the OS has dark mode enabled
      ? true
      : localStorage.getItem("darkMode") === "true" // Get the initial state from localStorage
  )

  // Update the window width state when the window is resized
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Set the dark mode class on the body
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
      {showCursor && windowWidth > 780 ? (
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
      <NavBar
        setCursor={handleToggle}
        cursorStatus={showCursor}
        darkMode={darkMode}
        setDarkMode={handleDarkMode}
      />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, type: "spring" }}>
          <Outlet context={[darkMode, setDarkMode]} />
          <Footer darkMode={darkMode} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App
