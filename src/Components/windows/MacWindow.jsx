import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'

const MacWindow = ({ children,width="900",height='500',windowName, setWindowsState  }) => {
  return (
    <Rnd
      default={{
        width: width,
        height: height,
        x: 100,
        y: 80
      }}
      minWidth={320}
      minHeight={400}
      bounds="window"
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <span onClick={() => setWindowsState(state => ({ ...state, [windowName]: false }))} className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="title">darshanwalher — zsh</div>
        </div>

        <div className="content">{children}</div>
      </div>
    </Rnd>
  )
}

export default MacWindow
