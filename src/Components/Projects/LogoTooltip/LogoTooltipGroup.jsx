

import LogoTooltip from "./LogoTooltip";
import styles from './LogoTooltip.module.css'

function LogoTooltipGroup({logosBlock}) {
    return (
        <div className={styles.tooltipGroup}>
            {logosBlock.map(block => {
                return <LogoTooltip key={block.name} logo={block.logo} text={block.name} />
            })}
        </div>
      )
}

export default LogoTooltipGroup