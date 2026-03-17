import ProjectCard from "../components/ProjectCard"
import data from "../data/projects.json"

const Projects = () => {
  const projects = data.projects

  const projectList = projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))

  return (
    <main>
      <h1>Things I've Built.</h1>
      <section aria-label="subheading" className="sub">
        I like to make stuff that's fun, exciting, and helpful. Here are a few
        things I've built recently.
      </section>
      <section aria-label="featured projects" className="featured-projects">
        {/* <h2>Featured Projects</h2> */}
        <div>{projectList}</div>
      </section>
    </main>
  )
}

export default Projects
