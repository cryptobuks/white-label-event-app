import React from 'react';
import { View } from 'react-native';

const style = {
  alignSelf: 'center',
  width: 140,
  height: 50,
};

const SmallView = props => (
  <View style={style}>
    {props.children}
  </View>
);

export { SmallView as default };
