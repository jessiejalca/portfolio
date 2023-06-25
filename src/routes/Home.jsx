import { Link } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"

const Home = () => {
  return (
    <main>
      <div className="hero">
        <h1>I'm Jessie Jalca.</h1>
        <p>
          Frontend developer, JavaScript engineer, user advocate, practicing
          minimalist, hobbyist language learner, occasional photographer, serial
          reader, and multi-genre music listener, <em>at your service</em>.
        </p>
        <Link className="actionBtn" to={"/projects"}>
          <p>See what I can do</p>
          <img src={rightArrow} />
        </Link>
      </div>
    </main>
  )
}

export default Home
