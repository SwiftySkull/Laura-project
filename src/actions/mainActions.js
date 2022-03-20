// ACTIONS TYPES

export const SET_MENU_OPEN = 'SET_MENU_OPEN';
export const SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE';
export const SET_MESSAGES = 'SET_MESSAGES';
export const VALID_CAPTCHA = 'VALID_CAPTCHA';

// ACTIONS CREATORS

export const setMenuOpen = () => ({
  type: SET_MENU_OPEN,
});

export const setCurrentSlide = (slide) => ({
  type: SET_CURRENT_SLIDE,
  slide,
});

export const setMessage = (bool) => ({
  type: SET_MESSAGES,
  bool,
});

export const validCaptcha = () => ({
  type: VALID_CAPTCHA,
});
