import { Link, useOutletContext } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"
import { useLatestCommit, formatRelative } from "../hooks/useLatestCommit"

const Home = () => {
  const [darkMode, setDarkMode] = useOutletContext()

  // Dynamically get status from GitHub
  const commit = useLatestCommit("jessiejalca")
  const repoName = commit?.repo ?? "my latest project"
  const timeAgo = commit?.date ? formatRelative(commit.date) : "recently"

  return (
    <main>
      <div className="status-pill">
        <div className="circle"></div>
        <p>Last seen building <span className="timestamp">{repoName} · {timeAgo}</span></p>
      </div>
      <div className="hero">
        <h1>I'm Jessie Jalca.</h1>
        <section aria-label="subheading">
          Frontend developer, JavaScript engineer, user advocate, soccer
          aficionado, hobbyist language learner, habitual music listener, and
          serial reader, <em>at your service</em>.
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
