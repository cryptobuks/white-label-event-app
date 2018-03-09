import React from 'react';
import { Text } from 'react-native';
import COLORS from '../config/colors';

const Title = ({ value, fontSize, fontWeight }) => (
  <Text style={{ fontSize, fontWeight, color: COLORS.black }}>{value}</Text>
);

export default Title;
