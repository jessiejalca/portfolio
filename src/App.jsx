import { useState } from "react"
import "./App.css"
import AnimatedCursor from "react-animated-cursor"
import NavBar from "./components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={60}
        innerScale={1}
        outerScale={1.6}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "#46B1C9",
        }}
        outerStyle={{
          border: "1px solid #46B1C9",
          backgroundColor: "#46B1C91A",
        }}
      />
      <NavBar />
      <main>
        <div className="hero">
          <h1>I'm Jessie Jalca</h1>
          <p></p>
        </div>
      </main>
    </div>
  )
}

export default App
