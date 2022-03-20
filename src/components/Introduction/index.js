import React, { useEffect, useRef } from 'react';
import './introduction.scss';
import { init } from 'ityped';

export default function Introduction() {
  // Mise en place de la librairie ityped
  // https://www.npmjs.com/package/ityped
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ['Conceptrice', 'Créatrice de contenu'],
    });
  }, []);
  return (
    <div className="introduction" id="introduction">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/laura.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Salut, je suis</h2>
          <h1>Laura Hantz</h1>
          <h3>
            Développeuse Web <span ref={textRef} />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
