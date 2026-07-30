import { useState } from 'react'
import './Certificates.css'
import aiSummerCamp from '../assets/cert-ai-summer-camp.jpg'
import pythonArduino from '../assets/cert-python-arduino.jpg'
import lebawiHackathon from '../assets/cert-lebawi-hackathon.jpg'
import { useScrollReveal } from '../hooks/useScrollReveal'

const certificates = [
  {
    title: 'AI Summer Camp 2025',
    issuer: 'Ethiopian Artificial Intelligence Institute',
    date: '2025',
    description: 'Completed courses in AI Basics, Programming, Machine Learning, and AI Application.',
    image: aiSummerCamp,
  },
  {
    title: 'Python and Arduino (Robotics)',
    issuer: 'Arc Globe Computer Training Center',
    date: 'September 2024',
    description: 'Completed a two-month course covering Python programming and Arduino-based robotics.',
    image: pythonArduino,
  },
  {
    title: 'Lebawi International Academy High School Hackathon',
    issuer: 'Lebawi International Academy',
    date: 'May 2026',
    description: 'Recognized for exceptional creativity, innovation, teamwork, and technical excellence.',
    image: lebawiHackathon,
  },
]

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null)
  const [ref, isVisible] = useScrollReveal()
  return (
    <section id="certificates" className={`certificates reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="certificates-container">
        <p className="certificates-label">Certificates</p>
        <h2 className="certificates-title">Certifications & Achievements</h2>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div
              className="certificate-card"
              key={index}
              onClick={() => setSelectedCert(cert)}
            >
              <img src={cert.image} alt={cert.title} className="certificate-thumbnail" />
              <h3>{cert.title}</h3>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <span className="certificate-link">View Certificate →</span>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <div className="certificate-modal" onClick={() => setSelectedCert(null)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-modal-close" onClick={() => setSelectedCert(null)}>
              ✕
            </button>
            <img src={selectedCert.image} alt={selectedCert.title} />
            <h3>{selectedCert.title}</h3>
            <p>{selectedCert.issuer} — {selectedCert.date}</p>
            <p className="certificate-modal-description">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates