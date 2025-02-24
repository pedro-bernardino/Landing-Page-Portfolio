import Technology from './ProjectCardTechnology'

function ProjectCard({href, src, h3Type, h3Name, tech}) {
  return (
    <div className='card'>
        <h3>{h3Type} <br /> {h3Name}</h3>
        <a href={href} target="_blank" >
            <img className='hover' src={src} alt={`${h3Name} logo`} />
        </a>
        <Technology tech={tech} />
    </div>
  )
}

export default ProjectCard