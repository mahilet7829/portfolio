import { useState } from 'react'
import './Contact.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        console.error('Server error:', data.error)
        setStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus('error')
    }
  }
    const [ref, isVisible] = useScrollReveal()
  return (
    <section id="contact" className={`contact reveal ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="contact-container">
        <p className="contact-label">Contact</p>
        <h2 className="contact-title">Let's work together</h2>
        <p className="contact-subtitle">
          Have a project in mind or just want to say hi? Fill out the form below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="form-status success">Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="form-status error">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact