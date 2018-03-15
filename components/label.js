// @flow
import * as React from 'react';
import { Text } from 'react-native';
import { TStyleSheet } from '../types/stylesheet';
import { COLORS, FONT_SIZES } from '../config';

type Props = {
  value: React.ReactText,
} & TStyleSheet;

const Label = ({ value, fontSize, color }: Props) => (
  <Text style={{ fontSize, color }}>{value}</Text>
);

Label.defaultProps = {
  color: COLORS.grey,
  fontSize: FONT_SIZES.tertiary,
};

export default Label;
