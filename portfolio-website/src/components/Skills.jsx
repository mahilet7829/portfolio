import './Skills.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const skills = [
  { name: 'React.js', level: 'Advanced' },
  { name: 'Flutter', level: 'Intermediate' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'Express.js', level: 'Intermediate' },
  { name: 'PostgreSQL', level: 'Intermediate' },
  { name: 'Prisma', level: 'Intermediate' },
  { name: 'Git & GitHub', level: 'Advanced' },
]

function Skills() {
  const [ref, isVisible] = useScrollReveal()
  return (
    <section id="skills" className={`skills reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="skills-container">
        <p className="skills-label">Skills</p>
        <h2 className="skills-title">What I work with</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills