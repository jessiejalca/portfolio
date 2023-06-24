import { Link } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"

const Home = () => {
  return (
    <main>
      <div className="hero">
        <h1>I'm Jessie Jalca</h1>
        <p>
          Frontend developer, JavaScript engineer, UX/UI advocate, practicing
          minimalist, hobbyist language learner, occasional photographer, sci-fi
          and fantasy reader, and indie rock fan, <em>at your service</em>.
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
