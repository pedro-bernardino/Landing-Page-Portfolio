import Technology from './ProjectCardTechnology'

function ProjectCard({href, src, h3, tech}) {
  return (
    <div className='card'>
        <h3>{h3}</h3>
        <a href={href} target="_blank" >
            <img className='hover' src={src} alt={`${h3} logo`} />
        </a>
        <Technology tech={tech} />
    </div>
  )
}

export default ProjectCard