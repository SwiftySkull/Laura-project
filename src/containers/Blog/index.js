import { connect } from 'react-redux';

import { setCurrentSlide } from 'src/actions/mainActions';

import Blog from 'src/components/Blog';

/**
 * To display data in the component
 */

const mapStateToProps = (state) => ({
  currentSlide: state.main.currentSlide,
});

/**
 * To dispatch function in the component
 */
const mapDispatchToProps = (dispatch) => ({
  /**
   * Change the slide
   */
  setCurrentSlide: (slide) => {
    dispatch(setCurrentSlide(slide));
  },
});

// === Assistant creation for the component
export default connect(mapStateToProps, mapDispatchToProps)(Blog);
