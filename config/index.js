/* eslint-disable global-require */

import { Dimensions, Platform } from 'react-native';

export const ASSETS = {
  buttonImg: require('../assets/button.png'),
  buttonImgActive: require('../assets/button--active.png'),
  close: require('../assets/close.png'),
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
  blackTransparent: 'rgba(0,0,0,.5)',
  grey: '#424749',
  violetPink: '#e54cfe',
  cyan: '#35e2aa',
};

export const FONT_SIZES = {
  primary: 16,
  secondary: 14,
  tertiary: 12,
};

export const FONT_WEIGHTS = {
  heavy: '800',
  bold: '600',
  normal: '400',
  light: '300',
};

export const IS_IPHONE_X = Platform.OS === 'ios' && (height === 812 || width === 812);
