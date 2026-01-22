import React, { useState, useRef, useEffect } from "react";
import "./navbar.scss";
import DateTime from "./DateTime";

const NavBar = ({ setWindowsState }) => {
  const [showWindowMenu, setShowWindowMenu] = useState(false);
  const menuRef = useRef(null);

  const openTerminal = () => {
    setWindowsState(prev => ({ ...prev, cli: true }));
  };

  const openAbout = () => {
    setWindowsState(prev => ({ ...prev, note: true }));
  };

  const openFile = () => {
    setWindowsState(prev => ({ ...prev, resume: true }));
  };

  const focusWindow = (name) => {
    setWindowsState(prev => ({ ...prev, [name]: true }));
    setShowWindowMenu(false);
  };

  // ✅ CLOSE MENU WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowWindowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav>
      <div className="left">
        <div className="apple-icon">
          <img src="/NavBar-Icon/apple.svg" alt="Apple" />
        </div>

        <div onClick={openAbout} className="nav-item">
          <p>Darshan</p>
        </div>

        <div onClick={openFile} className="nav-item">
          <p>File</p>
        </div>

        {/* ✅ WINDOW BUTTON + MENU */}
        <div className="nav-item" ref={menuRef}>
          <p onClick={() => setShowWindowMenu(prev => !prev)}>Window</p>

          {showWindowMenu && (
            <div className="window-menu">
              <p onClick={() => focusWindow("note")}>Notes</p>
              <p onClick={() => focusWindow("resume")}>Resume</p>
              <p onClick={() => focusWindow("cli")}>Terminal</p>
            </div>
          )}
        </div>

        <div className="nav-item" onClick={openTerminal}>
          <p>Terminal</p>
        </div>
      </div>

      <div className="right">
        <div className="nav-wifi">
          <img src="/NavBar-Icon/wifi.svg" alt="WiFi" />
        </div>
        <div className="nav-item">
          <DateTime />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
