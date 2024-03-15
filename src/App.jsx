import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet, useLocation } from "react-router-dom"
import { useAnimate } from "framer-motion"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const location = useLocation()
  const [scope, animate] = useAnimate()
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    animate(scope.current, { opacity: 0, opacity: 1 }, { duration: 1 })
  }, [location])

  // Toggle the animated cursor on and off
  const handleToggle = () => {
    setShowCursor(!showCursor)
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
      <NavBar setCursor={handleToggle} cursorStatus={showCursor} />
      <div ref={scope}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
