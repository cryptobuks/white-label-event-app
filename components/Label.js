// @flow
import React from 'react';
import { Text } from 'react-native';
import type { TStyleSheet } from '../types/stylesheet';
import { COLORS, FONT_SIZES } from '../config';

type TProps = {
  value: string,
} & TStyleSheet;

const Label = ({ value, fontSize, color }: TProps) => (
  <Text style={{ fontSize, color }}>{value}</Text>
);

Label.defaultProps = {
  color: COLORS.grey,
  fontSize: FONT_SIZES.tertiary,
};

export default Label;
