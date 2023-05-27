import "./App.css"
import AnimatedCursor from "react-animated-cursor"
import NavBar from "./components/NavBar"
import rightArrow from "./assets/right-arrow.svg"

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
      <main>
        <div className="hero">
          <h1>I'm Jessie Jalca</h1>
          <p>
            Frontend developer, JavaScript engineer, UX/UI advocate, language
            learner, practicing minimalist, occasional photographer.
          </p>
          <a className="actionBtn">
            <p>See what I can do</p>
            <img src={rightArrow} />
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
