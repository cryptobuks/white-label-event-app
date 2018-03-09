import React from 'react';
import { Text } from 'react-native';

const Label = ({ value, fontSize, fontWeight, color }) => (
  <Text style={{ fontSize, fontWeight, color }}>{value}</Text>
);

export default Label;
