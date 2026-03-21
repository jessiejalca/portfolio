import { Link, useOutletContext } from "react-router-dom"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"
import { useLatestCommit, formatRelative } from "../hooks/useLatestCommit"
import projects from "../data/projects.json"

// Count how many projects use each technology, then sort descending so the
// most-used tools appear first — gives visitors a quick read on core strengths
const techCounts = projects.projects.flatMap((p) => p.tech).reduce((acc, t) => {
  acc[t] = (acc[t] || 0) + 1
  return acc
}, {})
const allTech = Object.keys(techCounts).sort((a, b) => techCounts[b] - techCounts[a])

const Home = () => {
  const [darkMode] = useOutletContext()

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
          Developer with a designer's eye, CS student at WGU, soccer aficionado, and hobbyist language learner — <em>at your service</em>.
        </section>
        <Link className="actionBtn" to={"/projects"}>
          <p>See what I can do</p>
          <img src={darkMode ? rightArrowDark : rightArrow} />
        </Link>
        <section aria-label="tech stack" className="tech-strip">
          <div className="tech">
            {allTech.map((t) => <span key={t}>{t}</span>)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
