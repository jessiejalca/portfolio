const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" className="project-card">
      <img src={`/public/${project.image}`} alt="project" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </a>
  )
}

export default ProjectCard
