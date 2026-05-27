import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/resume.css'

const ResumePage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="resume-page">
        <div className="resume-card">
        <h2>Full-Stack Development Resume</h2>
          <div className="resume-embed">
            <iframe
              title="Resume PDF"
              src="/Assets/Documents/Huang_Fullstack_Resume.pdf#view=FitH"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePage
