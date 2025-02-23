import styles from './Footer.module.css'
import Linkedin from '../../assets/linkedin-dark.svg'
import Github from '../../assets/github-dark.svg'
import SocialLink from '../Hero/SocialLink'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <div className={styles.footer}>
            <p>&copy; 2025 Pedro Bernardino.</p>
            <div className={styles.socialLogosSpan}>
                <SocialLink href="https://www.linkedin.com/in/pedro--bernardino/" src={Linkedin}/>
                <SocialLink href="https://github.com/pedro-bernardino" src={Github}/>
            </div>
        </div>
    </section>
  )
}

export default Footer