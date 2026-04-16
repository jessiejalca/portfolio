import { Link, useOutletContext } from "react-router-dom"
import { useLang } from "../contexts/LangContext"
import rightArrow from "../assets/right-arrow.svg"
import rightArrowDark from "../assets/dm-right-arrow.svg"
import { useLatestCommit, formatRelative } from "../hooks/useLatestCommit"
import { content, projectsMeta } from "../data/content.js"

// Count how many projects use each technology, then sort descending so the
// most-used tools appear first — gives visitors a quick read on core strengths
const techCounts = projectsMeta.flatMap((p) => p.tech).reduce((acc, tech) => {
  acc[tech] = (acc[tech] || 0) + 1
  return acc
}, {})
const allTech = Object.keys(techCounts).sort((a, b) => techCounts[b] - techCounts[a])

const Home = () => {
  const { lang } = useLang()
  const t = content[lang].home

  const [darkMode] = useOutletContext()

  // Dynamically get status from GitHub
  const commit = useLatestCommit("jessiejalca")
  const repoName = commit?.repo ?? "my latest project"
  const timeAgo = commit?.date ? formatRelative(commit.date, lang) : t.statusPill.recently


  return (
    <main>
      <div className="status-pill">
        <div className="circle"></div>
        <p>{t.statusPill.prefix}<span className="timestamp">{repoName} · {timeAgo}</span></p>
      </div>
      <div className="hero">
        <h1>{t.headline}</h1>
        <section aria-label="subheading">
          {t.subheadline.text}<em>{t.subheadline.em}</em>.
        </section>
        <Link className="actionBtn" to={"/projects"}>
          <p>{t.cta}</p>
          <img src={darkMode ? rightArrowDark : rightArrow} />
        </Link>
        <section aria-label="tech stack" className="tech-strip">
          <div className="tech">
            {allTech.map((tech) => <span key={tech}>{tech}</span>)}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
