const ProjectCard = ({ project }) => {
  const techList = project.tech.map((tech, index) => (
    <span key={index}>{tech}</span>
  ))

  return (
    <a href={project.link} target="_blank" className="project-card">
      <img src={project.image} alt={project.alt} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <span className="tech">{techList}</span>
    </a>
  )
}

export default ProjectCard
