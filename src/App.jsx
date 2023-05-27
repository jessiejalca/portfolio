import "./App.css"
import AnimatedCursor from "react-animated-cursor"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={60}
        innerScale={1}
        outerScale={1.6}
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
      <Hero />
    </div>
  )
}

export default App
