import styles from './Hero.module.css'
import PBLogo from '../../assets/PBLogo.png'
import Linkedin from '../../assets/linkedin-dark.svg'
import Github from '../../assets/github-dark.svg'
import SocialLink from './SocialLink'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div >
        <img className={styles.hero} src={PBLogo} alt="Profile picture" />
      </div>
      <div className={styles.info}>
        <h1>
          Pedro
          <br />
          Bernardino
        </h1>
        <h2>Developer</h2>
        <span className={styles.socialLogosSpan}>
          <SocialLink href="https://www.linkedin.com/in/pedro--bernardino/" src={Linkedin}/>
          <SocialLink href="https://github.com/pedro-bernardino" src={Github}/>
        </span>
        <p className={styles.description}>
        Description text. 
        </p>
        <a href={PBLogo} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
