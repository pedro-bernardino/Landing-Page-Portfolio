import LogoTooltipGroup from './LogoTooltipGroup'

function ProjectCard({href, src, h3Type, h3Name, logos}) {
  return (
    <div className='card'>
        <h3>{h3Type} <br /> {h3Name}</h3>
        <a href={href} target="_blank" >
            <img className='hover' src={src} alt={`${h3Name} logo`} />
        </a>
        <LogoTooltipGroup logosBlock={logos}/>
    </div>
  )
}

export default ProjectCard