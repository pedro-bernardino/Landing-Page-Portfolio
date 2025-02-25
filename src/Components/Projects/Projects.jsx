import styles from './Projects.module.css'
/* import './Projects.module.css' */

//components
import ProjectCard from '../Projects/ProjectCard'
import LogoTolltipGroup from './LogoTooltipGroup'

//projects images
import PortfolioLogo from '../../assets/portfolio.png'
import Kobodrop from '../../assets/kobodrop.png'

//icons
import techReact from '../../assets/react.svg'
import techVite from '../../assets/vite.svg'
import techTailwind from '../../assets/tailwind.svg'
import techTypeScript from '../../assets/typescript.svg'
import techHeadlessui from '../../assets/headlessui.svg'


function Projects() {

const reactTech = {logo: techReact, name: 'React'}
const viteTech = {logo: techVite, name: 'Vite'}
const tailwindTech = {logo: techTailwind, name: 'Tailwind'}
const typescriptTech = {logo: techTypeScript, name: 'TypeScript'}
const headlessuiTech = {logo: techHeadlessui, name: 'Headless ui'}

  return (
    <section id='projects' className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3Type='Landing Page'
              h3Name='Portfolio'
              logos={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={Kobodrop}
              h3Type='Landing Page'
              h3Name='Finantial App'
              logos={
                [reactTech, viteTech, tailwindTech, typescriptTech, headlessuiTech]
              }
          />
        </div>
    </section>
  )
}

export default Projects

