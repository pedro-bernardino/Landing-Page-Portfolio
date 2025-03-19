import styles from './ProjectCard.module.css'

import LogoTooltipGroup from '../LogoTooltip/LogoTooltipGroup'

function ProjectCard({href, demoRef, src, h3Type, h3Name, logos}) {
  return (
    <div className={styles.container}>
{/*         <a href={href} target="_blank" >
            <img className={styles.image} src={src} alt={`${h3Name} logo`} />
            <div>tem</div>
        </a> */}
        <div className={styles.image_overlay_Container}>
          <div className={styles.imageContainer}>
            <img 
              className={styles.image} 
              src={src} 
              alt={`${h3Name} logo`} />
          </div>
          {href && <>
          <div className={styles.overlay}></div>
          <div className={styles.overlayContents}>
          {demoRef.lenght}
              { demoRef &&
                <a href={demoRef} target="_blank">
                  <button className={styles.overlayButtons}>Demo</button>
                </a>
              }
              <a href={href} target="_blank">
                <button className={styles.overlayButtons}>Code</button>
              </a>
          </div>
          </>
          }
        </div>
        <h3 >{h3Type} {/* <br /> */} {h3Name}</h3>
        <LogoTooltipGroup logosBlock={logos}/>
    </div>
  )
}

export default ProjectCard