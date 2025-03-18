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
      <SkillCard src={checkMarkIcon} skill="Tailwind CSS" />
    </div>
  </section>
  )
}

export default Skills