import "./App.css"
import AnimatedCursor from "react-animated-cursor"
import NavBar from "./components/NavBar"
import Home from "./routes/Home"

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={68}
        innerScale={1.8}
        outerScale={0.3}
        outerAlpha={0}
        hasBlendMode={true}
        // showSystemCursor={true}
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
        <Home />
      </div>
    </div>
  )
}

export default App
