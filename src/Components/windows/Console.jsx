import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './console.scss'

const Console = ({ windowName, setWindowsState }) => {
  const commands = {
  about: {
    description: 'Display personal bio.',
    fn: () =>
      [
        'NAME: Darshan Madan Walher',
        'ROLE: Data Analytics & React Developer',
        'FOCUS: Cybersecurity & AI/ML',
        'LOCATION: Pune, India',
      ].join('\n'),
  },

  skills: {
    description: 'View technical expertise.',
    fn: () =>
      [
        '--------------------------------------------',
        '🚀 FRONTEND : React (Beginner), JS, SCSS',
        '⚙️  BACKEND  : Python, Flask, MongoDB',
        '📊 DATA/AI  : Pandas, Scikit-learn, ML',
        '🛡️  SECURITY : OWASP Top 10, Kali Linux',
        '--------------------------------------------',
      ].join('\n'),
  },

  projects: {
    description: 'List major projects.',
    fn: () =>
      [
        '1. Automated Web Vulnerability Scanner',
        '2. Credit Card Fraud Detection System',
        '3. WhatsApp Chat Analyzer',
      ].join('\n'),
  },

  github: {
    description: 'Open GitHub profile.',
    fn: () => {
      window.open('https://github.com/Darshanwalher', '_blank')
      return 'Opening GitHub...'
    },
  },

  linkedin: {
    description: 'Open LinkedIn profile.',
    fn: () => {
      window.open('', '_blank')
      return 'Opening LinkedIn...'
    },
  },

  contact: {
    description: 'Display contact information.',
    fn: () =>
      [
        '📧 Email: darshanwalher21@gmail.com',
        '📍 Location: Pune, India',
      ].join('\n'),
  },

  resume: {
    description: 'Open Resume PDF.',
    fn: () => {
      window.open('/resume.pdf', '_blank')
      return 'Opening resume...'
    },
  },
}


  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={[
            'Welcome to Darshan OS [v2.0.1]',
            'Type "help" to list commands.',
            '',
          ].join('\n')}
          promptLabel="darshan:~$ "
          autoFocus
          style={{
            backgroundColor: '#1a1a1a',
            height: '100%',
            borderRadius: '0px',
            padding: '12px',
          }}
          contentStyle={{
            color: '#d19a66',
            fontFamily: '"Fira Code", monospace',
          }}
          promptLabelStyle={{ color: '#98c379' }}
          inputStyle={{ color: '#61dafb' }}
        />
      </div>
    </MacWindow>
  )
}

export default Console
