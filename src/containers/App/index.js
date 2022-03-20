import { connect } from 'react-redux';

import { setMenuOpen } from 'src/actions/mainActions';

import App from 'src/components/App';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  menuOpen: state.main.menuOpen,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Open and hide the navbar
   */
  setMenuOpen: () => {
    dispatch(setMenuOpen());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(App);
