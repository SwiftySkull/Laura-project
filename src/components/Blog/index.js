import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './blog.scss';

const Blog = ({
  currentSlide,
  setCurrentSlide,
}) => {
  useEffect(() => {

  }, []);

  document.title = 'DeveloPoulpe';

  const data = [
    {
      id: '1',
      icon: './assets/writing.png',
      title: 'Drager Papeterie',
      desc:
        "Découvrons ensemble la papeterie Draeger pour s'organiser au quotidien.",
      img:
        '../assets/blog1.png',
      link: 'https://happy-lobster.com/organisation-papeterie-draeger/',
    },
    {
      id: '2',
      icon: './assets/writing.png',
      title: 'Mon Petit Morphée',
      desc:
        'Mon Petit Morphée, une innovation déconnectée pour enfants pour méditer et retrouver calme et sérénité.',
      img:
        '../assets/morphee.jpg',
      link: 'https://happy-lobster.com/mon-petit-morphee-meditation-pour-enfants/',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Le sport à la maison',
      desc:
        "Être développeuse, c'est être bien souvent assis. Pour contrer cette sédentarité, je vous propose une routine sportive à faire à la maison ! On peut avoir un métier sédentaire et être sportif.",
      img:
        '../assets/sport.jpg',
      link: 'https://happy-lobster.com/sport-a-la-maison-routine-et-conseils/',
    },
  ];

  const handleClick = (way) => {
    way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="blog" id="blog">
      <h1>Blog</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <h4 className="worklink">
                    <button type="button">
                      <a href={d.link} target="_blank" rel="noreferrer noopener">Lire l'article</a>
                    </button>
                  </h4>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow1.png" className="arrow arrow-left" alt="" onClick={() => handleClick('left')} />
      <img src="assets/arrow1.png" className="arrow arrow-right" alt="" onClick={() => handleClick()} />
    </div>
  );
};

Blog.propTypes = {
  currentSlide: PropTypes.number.isRequired,
  setCurrentSlide: PropTypes.func.isRequired,
};

export default Blog;
