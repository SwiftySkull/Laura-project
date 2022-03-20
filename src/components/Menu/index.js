import React, { useEffect } from 'react';

import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`menu ${menuOpen && 'active'}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#introduction">Accueil</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#blog">Blog</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#experiences">Expériences</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
