import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-logo">Mahlet<span>.</span></p>

        <div className="footer-socials">
          <a href="https://github.com/mahilet7829" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mahlet-yared-a336673a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mahletyared483@gmail.com">Email</a>
        </div>

        <p className="footer-copy">© {year} Mahlet Yared. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer