import { useEffect } from "react"
import AnimatedCursor from "react-animated-cursor"
import { Outlet, useLocation } from "react-router-dom"
import { useAnimate, animate } from "framer-motion"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const location = useLocation()
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, { opacity: 0, opacity: 1 }, { duration: 1 })
  }, [location])

  return (
    <div className="App">
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
      <NavBar />
      <div ref={scope}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
