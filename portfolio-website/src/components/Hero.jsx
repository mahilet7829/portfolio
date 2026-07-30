import './Hero.css'
import heroPhoto from '../assets/hero-photo.jpg'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <p className="hero-greeting">Hello There!</p>
          <h1 className="hero-title">
  I'm <span>Mahlet Yared</span>,<br />
  Full-Stack Developer |<br />
  Flutter & React Developer.
</h1>
<p className="hero-description">
  I am an aspiring Full-Stack and Mobile Developer passionate about creating
  user-friendly web and mobile applications. I enjoy learning new
  technologies, solving real-world problems, and building projects that
  make a positive impact.
</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Hire Me</a>
          </div>
        </div>
<div className="hero-image">
  <img src={heroPhoto} alt="Mahlet Yared" className="hero-photo" />
</div> 
      </div>
    </section>
  )
}

export default Hero