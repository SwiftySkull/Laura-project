// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// == Import
import Navbar from 'src/components/Navbar';
import Introduction from 'src/components/Introduction';
import Portfolio from 'src/containers/Portfolio';
import Blog from 'src/containers/Blog';
import Experience from 'src/components/Experience';
import Contact from 'src/containers/Contact';
import Menu from 'src/components/Menu';

import './app.scss';

// == Composant
const App = ({
  menuOpen,
  setMenuOpen,
}) => {
  useEffect(() => {

  }, []);

  document.title = 'DeveloPoulpe';

  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Introduction />
        <Portfolio />
        <Blog />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

App.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

App.defaultProps = {

};

// == Export
export default App;
