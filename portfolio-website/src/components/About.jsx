import './About.css'
import aboutPhoto from '../assets/about-photo.jpg'
import { useScrollReveal } from '../hooks/useScrollReveal'

function About() {
  const [ref, isVisible] = useScrollReveal()
  return (
    <section id="about" className={`about reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="about-container">
        <div className="about-image">
          <div className="about-image">
  <img src={aboutPhoto} alt="Mahlet Yared" className="about-photo" />
</div>
</div>

        <div className="about-text">
          <p className="about-label">About Me</p>
          <h2 className="about-title">A little more about who I am</h2>
          <p className="about-description">
            I'm Mahlet Yared, a Full Stack Developer passionate about building
            clean, functional, and user-friendly web applications. I enjoy
            solving problems, learning new technologies, and turning ideas
            into real, working products from the ground up — front end to
            back end.
          </p>
         <p className="about-description">
  I am an aspiring Full-Stack and Mobile Developer with a passion for
  building practical digital solutions that solve real-world problems.
  I enjoy developing modern web and mobile applications using technologies
  such as React, Flutter, Node.js, Express, PostgreSQL, and Prisma.
</p>
<p className="about-description">
  I'm continuously learning new technologies, improving my problem-solving
  skills, and working on projects that create meaningful impact. Currently
  interning at Future Interns, where I'm sharpening my skills by building
  real-world projects like this portfolio.
</p>

          <div className="about-stats">
            <div className="about-stat">
              <h3>3+</h3>
              <p>Projects Built</p>
            </div>
            <div className="about-stat">
              <h3>1</h3>
              <p>Internship</p>
            </div>
            <div className="about-stat">
              <h3>100%</h3>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About