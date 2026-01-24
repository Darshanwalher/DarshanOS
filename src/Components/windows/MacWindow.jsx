import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";
import "./window.scss";

const MacWindow = ({
  children,
  width = 900,
  height = 500,
  windowName,
  setWindowsState
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Rnd
      size={
        isMobile
          ? { width: "100vw", height: "calc(100vh - 42px)" }
          : { width, height }
      }
      position={isMobile ? { x: 0, y: 42 } : undefined}
      default={{
        x: 100,
        y: 80
      }}
      minWidth={isMobile ? "100vw" : 320}
      minHeight={isMobile ? "100vh" : 400}
      bounds="window"
      disableDragging={isMobile}
      enableResizing={!isMobile}
    >
      <div className="window">
        <div className="nav">
          <div className="dots">
            <span
              onClick={() =>
                setWindowsState(state => ({
                  ...state,
                  [windowName]: false
                }))
              }
              className="dot red"
            />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <div className="title">darshanwalher — zsh</div>
        </div>

        <div className="content">{children}</div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
