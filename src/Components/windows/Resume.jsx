import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
      <div className="resume-window">
        {/* Header bar for the internal frame */}
        <div className="resume-header">
          <span>resume.pdf</span>
          <a href="/resume.pdf" download className="download-btn">
            Download CV
          </a>
        </div>
        
        {/* Note: Remove /public/ from the src path for Vite/React */}
        <iframe 
          src="/public/resume.pdf" 
          title="Resume PDF"
          frameBorder="0"
        ></iframe>
      </div>
    </MacWindow>
  )
}

export default Resume