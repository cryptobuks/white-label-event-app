import React from 'react';
import { View } from 'react-native';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'grey',
};

const SmallView = props => <View style={style}>{props.children}</View>;

export default SmallView;
