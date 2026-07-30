import './Projects.css'
import addisGoImg from '../assets/photo_2026-07-30_15-30-59.jpg'
import medcareImg from '../assets/photo_2026-07-30_15-21-47.jpg'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'AddisGO',
    description: 'A public transportation guide for Addis Ababa taxi transits, currently in development as a startup project.',
    tech: ['Flutter', 'Next.js', 'PostgreSQL'],
    githubLink: null,
    liveLink: null,
    image: addisGoImg,
  },
  {
    title: 'Medcare',
    description: 'A pharmacy management app built for a wholesale pharmacy client, handling inventory, sales, customers, and staff.',
    tech: ['Flutter', 'Next.js', 'PostgreSQL'],
    githubLink: null, 
    liveLink: null,
    image: medcareImg,
  },
]

function Projects() {
  const [ref, isVisible] = useScrollReveal()
  return (
    <section id="projects" className={`projects reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="projects-container">
        <p className="projects-label">Projects</p>
        <h2 className="projects-title">Some things I've built</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">Live Demo</a>
                )}
                {project.private && (
                  <span className="project-private-note">🔒 Private client project</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects