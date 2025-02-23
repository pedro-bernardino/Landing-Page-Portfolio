import styles from './Hero.module.css'
import PBLogo from '../../assets/PBLogo.png'
import Linkedin from '../../assets/linkedin-dark.svg'
import Github from '../../assets/github-dark.svg'
function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div >
        <img className={styles.logo} src={PBLogo} alt="Profile picture" />
      </div>
      <div className={styles.info}>
        <h1>
          Pedro
          <br />
          Bernardino
        </h1>
        <h2>Frontend Developer</h2>
        <span className={styles.socialLogosSpan}>
          <a
            href="https://www.linkedin.com/in/pedro--bernardino/"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin" />
          </a>
          <a href="https://github.com/pedro-bernardino" target="_blank">
            <img src={Github} alt="github" />
          </a>
        </span>
        <p className={styles.description}>
          Description text 
        </p>
        <a href={PBLogo} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
