import AnimatedCursor from "react-animated-cursor"
import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
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
      />
      <NavBar />
      <div className="box">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default App
