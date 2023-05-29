import "./App.css"
import AnimatedCursor from "react-animated-cursor"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <AnimatedCursor
        innerSize={8}
        outerSize={40}
        innerScale={1}
        outerScale={2.8}
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
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App
