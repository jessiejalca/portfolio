import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "The website you're looking at right now ;)",
      image: "ss-portfolio.jpg",
      link: "https://github.com/jessiejalca/portfolio",
      date: new Date("2024-01-02"),
    },
  ]

  const sortedProjects = projects.sort((a, b) => b.date - a.date)
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
