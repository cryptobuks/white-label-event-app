import React from 'react';
import { Text } from 'react-native';
import { TStyleSheet } from '../types/stylesheet';
import { COLORS, FONT_SIZES } from '../config/';

type Props = {
  value: string,
} & TStyleSheet;

const Title = ({ value, color, fontSize, fontWeight }: Props) => (
  <Text style={{ color, fontSize, fontWeight }}>{value}</Text>
);

Title.defaultProps = {
  color: COLORS.black,
  fontSize: FONT_SIZES.primary,
  fontWeight: '600',
};

export default Title;
