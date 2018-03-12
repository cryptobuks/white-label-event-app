import React from 'react';
import { Text } from 'react-native';
import COLORS from '../config/colors';
import FONT_SIZES from '../config/fontSizes';

const Label = ({ value, fontSize, color }) => <Text style={{ fontSize, color }}>{value}</Text>;

Label.defaultProps = {
  color: COLORS.grey,
  fontSize: FONT_SIZES.tertiary,
};

export default Label;
