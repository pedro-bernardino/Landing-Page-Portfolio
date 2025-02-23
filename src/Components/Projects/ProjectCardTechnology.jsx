
function ProjectCardTechnology({tech}) {
  return (
    <span>
        {tech.map(block => {
          console.log(block.logo, block.name)
            return (
              <span>
                <img src={block.logo} alt={`${block.name} logo`} />
                <h5>{block.name}</h5>
              </span>
            )
        })}
    </span>
  )
}

export default ProjectCardTechnology
