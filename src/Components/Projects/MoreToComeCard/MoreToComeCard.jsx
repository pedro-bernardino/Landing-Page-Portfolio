import styles from './MoreToComeCard.module.css'
import LogoTooltipGroup from '../LogoTooltip/LogoTooltipGroup'

function MoreToComeCard({ src, h3Type, h3Name, logos}) {
  return (
    <div className={styles.container}>
        <div className={styles.image_overlay_Container}>
          <div className={styles.imageContainer}>
            <img 
              className={styles.image} 
              src={src} 
              alt={`${h3Name} logo`} />
          </div>
        </div>
        <h3 >{h3Type} {/* <br /> */} {h3Name}</h3>
        <LogoTooltipGroup logosBlock={logos}/>
    </div>
  )
}

export default MoreToComeCard