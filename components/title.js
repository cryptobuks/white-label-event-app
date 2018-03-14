import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../config/';

const Title = ({ value, color, fontSize, fontWeight }) => (
  <Text style={{ color, fontSize, fontWeight }}>{value}</Text>
);

Title.defaultProps = {
  color: COLORS.black,
  fontSize: FONT_SIZES.primary,
  fontWeight: FONT_WEIGHTS.bold,
};

export default Title;
