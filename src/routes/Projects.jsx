import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

const Projects = () => {
  const projects = data.projects

  const sortedProjects = projects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  const projectList = sortedProjects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))

  return (
    <main>
      <h1>Things I've Built.</h1>
      <section aria-label="subheading" className="sub">
        I've enjoyed making real things that help real people. But also some
        stuff just for me.
      </section>
      <section aria-label="featured projects" className="featured-projects">
        <h2>Featured Projects</h2>
        <div>{projectList}</div>
      </section>
    </main>
  )
}

export default Projects
