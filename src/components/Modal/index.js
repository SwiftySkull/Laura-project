import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './modal.scss';

const Modal = ({
  isShowing, hide, title, img, bio, devs, technos, link,
}) => (isShowing
  ? ReactDOM.createPortal(
    <>
      <div id="modal-overlay">
        <div className="modal">
          <h3>{title}</h3>
          <img src={img} alt="" />
          <div className="trait" />
          <div className="infos">
            <p>{bio}</p>
            <p>Développé avec : {devs.map((dev, id) => (id === devs.length - 1 ? `${dev}` : `${dev}, `))}.</p>
          </div>
          <div className="trait" />
          <div className="technos">
            <p>Technos utilisées : {technos.map((tech, id) => (id === technos.length - 1 ? `${tech}` : `${tech}, `))}.</p>
          </div>
          <a href={link} target="_blank" rel="noreferrer" className="link"><button type="button" className="link-button">Vers le site</button></a>
          <button
            type="button"
            className="close-button"
            onClick={hide}
          >
            <span>&times;</span>
          </button>
        </div>
      </div>
    </>,
    document.body,
  )
  : null);

Modal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Modal;
