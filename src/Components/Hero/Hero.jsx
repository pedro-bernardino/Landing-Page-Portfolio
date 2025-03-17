import styles from './Hero.module.css'
import PBLogo from '../../assets/PBLogo.png'
import Linkedin from '../../assets/linkedin-dark.svg'
import Github from '../../assets/github-dark.svg'
import SocialLink from './SocialLink'
import CV from '../../assets/PBLogo.png' //Need to insert the CV PDF

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div >
        <img className={styles.heroLogo} src={PBLogo} alt="Profile picture" />
      </div>
      <div className={styles.info}>
        <h1>
          Pedro
          <br />
          Bernardino
        </h1>
        <h2>Front-End Developer</h2>
        <span className={styles.socialLogosSpan}>
          <SocialLink href="https://www.linkedin.com/in/pedro--bernardino/" src={Linkedin}/>
          <SocialLink href="https://github.com/pedro-bernardino" src={Github}/>
        </span>
        <p className={styles.description}>
        Description text. 
        </p>
        <a href={CV} download>
          <button className={styles.hover}>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
