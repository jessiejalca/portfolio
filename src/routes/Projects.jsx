import { useLang } from "../contexts/LangContext"
import { content, projectsMeta } from "../data/content"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const { lang } = useLang()
  const t = content[lang].projects
  // Merge the language-agnostic metadata into the translated content to use in each project card
  const projectList = t.items.map((item, index) => (
    <ProjectCard
      key={index}
      project={{ ...projectsMeta.find(meta => meta.id === item.id), ...item }}
    />
  ))

  return (
    <main>
      <h1>{t.heading}</h1>
      <section aria-label="subheading" className="sub">{t.subheading}</section>
      <section aria-label="featured projects" className="featured-projects">
        {/* <h2>Featured Projects</h2> */}
        <div>{projectList}</div>
      </section>
    </main>
  )
}

export default Projects
