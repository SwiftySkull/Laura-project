import { connect } from 'react-redux';

import { setMessage, validCaptcha } from 'src/actions/mainActions';

import Contact from 'src/components/Contact';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  message: state.main.message,
  captchaDone: state.main.captchaDone,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Display/hide the message flash
   */
  setMessage: (bool) => {
    dispatch(setMessage(bool));
  },

  /**
   * Display the submit button for request
   */
  validCaptcha: () => {
    dispatch(validCaptcha());
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Contact);
