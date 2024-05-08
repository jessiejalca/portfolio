import { Link, useOutletContext } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"

const Home = () => {
  const [darkMode, setDarkMode] = useOutletContext()

  return (
    <main>
      <div className="hero">
        <h1>I'm Jessie Jalca.</h1>
        <section aria-label="subheading">
          Frontend developer, JavaScript engineer, user advocate, soccer
          aficionado, hobbyist language learner, and serial reader,{" "}
          <em>at your service</em>.
        </section>
        <Link className="actionBtn" to={"/projects"}>
          <p>See what I can do</p>
          <img src={darkMode ? rightArrowDark : rightArrow} />
        </Link>
      </div>
    </main>
  )
}

export default Home
