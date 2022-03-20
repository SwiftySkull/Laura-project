import {
  SET_MENU_OPEN,
  SET_CURRENT_SLIDE,
  SET_MESSAGES,
  VALID_CAPTCHA,
} from 'src/actions/mainActions';

const initialState = {
  menuOpen: false,
  currentSlide: 0,
  message: false,
  captchaDone: false,
};

/**
 * Reducer for the main events.
 */
function mainReducer(state = initialState, action) {
  switch (action.type) {
    case VALID_CAPTCHA:
      return {
        ...state,
        captchaDone: true,
      };

    case SET_MESSAGES:
      return {
        ...state,
        message: action.bool,
      };

    case SET_MENU_OPEN:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };

    case SET_CURRENT_SLIDE:
      return {
        ...state,
        currentSlide: action.slide,
      };

    default:
      return state;
  }
}

export default mainReducer;
