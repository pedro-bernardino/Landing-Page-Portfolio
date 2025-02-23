import styles from './Projects.module.css'

import ProjectCard from '../Projects/ProjectCard'
import PortfolioLogo from '../../assets/portfolio.png'
import techReact from '../../assets/react.svg'
import techVite from '../../assets/vite.svg'

function Projects() {
const reactTech = {logo: techReact, name: 'React'}
const viteTech = {logo: techVite, name: 'Vite'}

  return (
    <section id='projects' className={styles.container}>
        <h1>Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
          <ProjectCard 
              href=''
              src={PortfolioLogo}
              h3='Landing Page Portfolio'
              tech={
                [reactTech, viteTech]
              }
          />
        </div>
    </section>
  )
}

export default Projects

