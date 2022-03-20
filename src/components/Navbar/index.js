import React, { useEffect } from 'react';
import './navbar.scss';
import { LinkedIn, CloudDownload, GitHub } from '@material-ui/icons';

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`navbar ${menuOpen && 'active'}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#introduction" className="logo">Laura Hantz</a>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="https://www.linkedin.com/in/laura-hantz/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="https://github.com/LauraH55" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="itemContainer">
            <CloudDownload className="icon" />
            <a href="assets/cv.pdf" target="_blank" rel="noreferrer">Mon CV</a>
          </div>
        </div>
        <div className="right">
          <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1" />
            <span className="line2" />
            <span className="line3" />
          </div>
        </div>
      </div>
    </div>
  );
}
