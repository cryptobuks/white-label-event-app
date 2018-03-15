import React from 'react';
import { View } from 'react-native';
import style from './style';

const CenterView = props => (
  <View style={style.main}>
    {props.children}
  </View>
);

export { CenterView as default };
