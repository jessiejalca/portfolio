import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description: "The website you're looking at right now ;)",
      image: "ss-portfolio.jpg",
      link: "https://github.com/jessiejalca/portfolio",
      date: new Date("2024-01-02"),
      isFeatured: true,
    },
    {
      title: "Portfolio",
      description: "The website you're looking at right now ;)",
      image: "ss-portfolio.jpg",
      link: "https://github.com/jessiejalca/portfolio",
      date: new Date("2023-01-02"),
      isFeatured: true,
    },
    {
      title: "Portfolio",
      description: "The website you're looking at right now ;)",
      image: "ss-portfolio.jpg",
      link: "https://github.com/jessiejalca/portfolio",
      date: new Date("2024-03-02"),
      isFeatured: true,
    },
    {
      title: "Portfolio",
      description: "The website you're looking at right now ;)",
      image: "ss-portfolio.jpg",
      link: "https://github.com/jessiejalca/portfolio",
      date: new Date("2024-05-03"),
      isFeatured: false,
    },
  ]

  const featuredProjects =
    projects.length <= 3
      ? projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      : projects
          .filter((project) => project.isFeatured === true)
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))

  return (
    <main>
      <h1>Things I've Built.</h1>
      <section aria-label="subheading" className="sub">
        I've enjoyed making real things that help real people. But also some
        stuff just for me.
      </section>
      <div className="projects">
        <section aria-label="featured projects" className="featured-projects">
          <h2>Featured Projects</h2>
          <div>{featuredProjects}</div>
        </section>
        {projects.length > 3 ? (
          <section aria-label="all projects" className="all-projects">
            <h2>All Projects</h2>
          </section>
        ) : (
          ""
        )}
      </div>
    </main>
  )
}

export default Projects
