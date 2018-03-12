import React from 'react';
import { Text } from 'react-native';
import { COLORS, FONT_SIZES } from '../config/';

const Title = ({ value, color, fontSize, fontWeight }) => (
  <Text style={{ color, fontSize, fontWeight }}>{value}</Text>
);

Title.defaultProps = {
  color: COLORS.black,
  fontSize: FONT_SIZES.primary,
  fontWeight: '600',
};

export default Title;
