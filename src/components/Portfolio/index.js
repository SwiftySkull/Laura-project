import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './portfolio.scss';
import featuredPortfolio from 'src/data';

import UseModal from 'src/components/Modal/UseModal';
import Modal from 'src/components/Modal';

const Portfolio = ({

}) => {
  const {
    isShowing, toggle, modalNumber, chooseModal,
  } = UseModal();

  useEffect(() => {

  }, []);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        {featuredPortfolio.map((d) => (
          <div className="item" onClick={() => (chooseModal(d.id))} key={d.id}>
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
            {modalNumber === d.id
              && (
              <Modal
                isShowing={isShowing}
                hide={toggle}
                title={d.title}
                img={d.img}
                bio={d.bio}
                devs={d.devs}
                technos={d.technos}
                link={d.link}
              />
              )}
          </div>
        ))}
      </div>
    </div>
  );
};

Portfolio.propTypes = {

};

export default Portfolio;
