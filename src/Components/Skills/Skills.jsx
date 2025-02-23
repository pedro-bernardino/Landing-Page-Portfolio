import styles from './Skills.module.css'
import SkillCard from "./SkillCard"
import checkMarkIcon from '../../assets/checkmark-dark.svg'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Skills</h1>
    <div className={styles.skillCard}>
      <SkillCard src={checkMarkIcon} skill="HTML" />
      <SkillCard src={checkMarkIcon} skill="CSS" />
      <SkillCard src={checkMarkIcon} skill="JavaScript" />
      <SkillCard src={checkMarkIcon} skill="TypeScript" />
      <SkillCard src={checkMarkIcon} skill="Node" />
    </div>
    <hr />
    <div className={styles.skillCard}>
      <SkillCard src={checkMarkIcon} skill="React" />
      <SkillCard src={checkMarkIcon} skill="Angular" />
      <SkillCard src={checkMarkIcon} skill="Vue" />
      <SkillCard src={checkMarkIcon} skill="Tailwind CSS" />
    </div>
    <hr />
    <div className={styles.skillCard}>
      <SkillCard src={checkMarkIcon} skill="Redux" />
      <SkillCard src={checkMarkIcon} skill="Webpack" />
      <SkillCard src={checkMarkIcon} skill="Git" />
      <SkillCard src={checkMarkIcon} skill="Jest" />
      <SkillCard src={checkMarkIcon} skill="Bootstrap" />
    </div>
  </section>
  )
}

export default Skills