import React from 'react';
import emailjs from 'emailjs-com';
import { SendRounded } from '@material-ui/icons';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

import './contact.scss';

const Contact = ({
  message,
  setMessage,
  captchaDone,
  validCaptcha,
}) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p5tylg8', 'template_wcu8vog', e.target, 'user_2VdB8BmnuIEHL3ZWhu26O')
      .then((result) => {
        setMessage(true);
        console.log(result.text);
        setTimeout(() => {
          setMessage(false);
        }, 5000);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact.png" alt="" />
      </div>
      <div className="right">
        <SendRounded className="icon" />
        <h2>Contactez-moi.</h2>
        <form onSubmit={sendEmail}>
          <div className="field name-field">
            <div className="label name-label">
              <img className="form-icon name-icon" src="./assets/user.svg" alt="" />
              <label htmlFor="name">Votre nom</label>
            </div>
            <input type="text" placeholder="Votre nom" name="name" />
          </div>
          <div className="field email-field">
            <div className="label email-label">
              <img className="form-icon email-icon" src="./assets/mail.svg" alt="" />
              <label htmlFor="email">Votre email</label>
            </div>
            <input type="email" placeholder="Votre email" name="email" />
          </div>
          <div className="field message-field">
            <div className="label message-label">
              <img className="form-icon message-icon" src="./assets/comment.svg" alt="" />
              <label htmlFor="message">Votre message</label>
            </div>
            <textarea placeholder="Votre message" name="message" />
          </div>
          <ReCAPTCHA
            sitekey="6LfDJvceAAAAAByZEeQonnu4vIK6QGjbb1euuhTt"
            onChange={validCaptcha}
          />
          {captchaDone && (<input className="button" type="submit" value="Envoyer" />)}
          {message && (
            <span>Merci, je vous réponds dès que possible !</span>
          )}
        </form>
      </div>
    </div>
  );
};

Contact.propTypes = {
  message: PropTypes.bool.isRequired,
  setMessage: PropTypes.func.isRequired,
  captchaDone: PropTypes.bool.isRequired,
  validCaptcha: PropTypes.func.isRequired,
};

export default Contact;
