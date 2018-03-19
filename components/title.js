// @flow
import React from 'react';
import { Text } from 'react-native';
import type { TStyleSheet } from '../types/stylesheet';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../config/';

type TProps = {
  value: string,
} & TStyleSheet;

const Title = ({ value, color, fontSize, fontWeight }: TProps) => (
  <Text style={{ color, fontSize, fontWeight }}>{value}</Text>
);

Title.defaultProps = {
  color: COLORS.black,
  fontSize: FONT_SIZES.primary,
  fontWeight: FONT_WEIGHTS.bold,
};

export default Title;
