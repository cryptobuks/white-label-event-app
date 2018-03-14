import { Dimensions } from 'react-native';

/* eslint-disable global-require */
export const ASSETS = {
  buttonImg: require('../assets/button.png'),
  buttonImgActive: require('../assets/button--active.png'),
};

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
};

const { width, height } = Dimensions.get('window');
export const METRICS = {
  width,
  height,
  gridSize: 8,
  iconSize: {
    xxsmall: 6,
    xsmall: 8,
    [SIZE.SMALL]: 14,
    [SIZE.MEDIUM]: 18,
    [SIZE.LARGE]: 24,
    [SIZE.XLARGE]: 30,
  },
};

export const COLORS = {
  transparent: 'transparent',
  white: 'white',
  black: 'black',
  grey: '#424749',
  violetPink: '#e54cfe',
};

export const FONT_SIZES = {
  primary: 16,
  secondary: 14,
  tertiary: 12,
};
