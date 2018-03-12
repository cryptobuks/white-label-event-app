import { Dimensions } from 'react-native';

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  XLARGE: 'xlarge',
};
const { width, height } = Dimensions.get('window');
const Metrics = {
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

export default Metrics;
