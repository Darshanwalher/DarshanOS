import React, { useState, useEffect } from 'react'
import './app.scss'
import Dock from './Components/Dock'
import NavBar from './Components/NavBar'
import GitHub from './Components/windows/GitHub'
import Note from './Components/windows/Note'
import Resume from './Components/windows/Resume'
import Spotify from './Components/windows/Spotify'
import Console from './Components/windows/Console'

const App = () => {
  const [windowState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // check if any window is open
  const isAnyWindowOpen = Object.values(windowState).some(Boolean)

  return (
    <main>
      <NavBar setWindowsState={setWindowsState} />

      {/* ✅ Dock hides ONLY on mobile AND when a window is open */}
      {!(isMobile && isAnyWindowOpen) && (
        <Dock windowState={windowState} setWindowsState={setWindowsState} />
      )}

      {windowState.github && <GitHub windowName="github" setWindowsState={setWindowsState} />}
      {windowState.note && <Note windowName="note" setWindowsState={setWindowsState} />}
      {windowState.resume && <Resume windowName="resume" setWindowsState={setWindowsState} />}
      {windowState.spotify && <Spotify windowName="spotify" setWindowsState={setWindowsState} />}
      {windowState.cli && <Console windowName="cli" setWindowsState={setWindowsState} />}
    </main>
  )
}

export default App
