import { useState } from "react"
import './Logotooltip.css'

function LogoTolltip({logo, text}) {
    const [showTooltip, setTooltip] = useState(false);
    return (
        <div 
          className='tooltipContainer'
          onMouseEnter={() => setTooltip(true)}
          onMouseLeave={() => setTooltip(false)}
        >
          <img className='tooltipLogo' src={logo} alt={`${text} logo`} />
          <div className={`tooltip ${showTooltip ? "open" : ""}`}>
            <h5>{text}</h5>
            <div className='tooltipArrow' />
          </div>
        </div>
      )
}

export default LogoTolltip

