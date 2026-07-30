import { useState } from 'react'
import './Navbar.css'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Mahlet<span>.</span></a>

        <div
          className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        </ul>

     <a href="#contact" className="navbar-cta" onClick={closeMenu}>Contact Me</a>
      </div>

      <button
        className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`}
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-switch-icon">
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </button>
    </nav>  
  )
}

export default Navbar