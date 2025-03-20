import styles from './Projects.module.css'

//components
import ProjectCard from './ProjectCard/ProjectCard'

//projects images
import PortfolioLogo from '../../assets/portfolio.png'
import Kobodrop from '../../assets/kobodrop.png'
import MoreToCome from '../../assets/coming-soon.jpg'

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
              href='https://github.com/pedro-bernardino/Landing-Page-Portfolio'
              demoRef=''
              src={PortfolioLogo}
              h3Type='Landing Page'
              h3Name='Portfolio'
              logos={
                [reactTech, viteTech]
              }
          />
{/*           <ProjectCard
              href=''
              demoRef=''
              src={Kobodrop}
              h3Type='Landing Page'
              h3Name='Finantial App'
              logos={
                [reactTech, viteTech, tailwindTech, typescriptTech, headlessuiTech]
              }
          /> */}
          <ProjectCard 
            href=''
            demoRef=''
            src={MoreToCome}
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

