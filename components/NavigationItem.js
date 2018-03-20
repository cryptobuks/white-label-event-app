// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FONT_SIZES, METRICS, COLORS } from '../config';

type TPosition = 'left' | 'middle' | 'right';

type TProps = {
  title: string,
  position: TPosition,
};

const GLOBALS = {
  itemWidth: METRICS.gridSize * 28,
  marginHorizontal: METRICS.gridSize * 3,
  naOpacity: 0.4,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  line: {
    marginTop: METRICS.gridSize,
    width: METRICS.gridSize * 2.5,
    height: METRICS.gridSize / 4,
    backgroundColor: COLORS.violetPink,
  },
  item: {
    color: COLORS.white,
    fontSize: FONT_SIZES.secondary,
    width: GLOBALS.itemWidth,
    fontWeight: 'bold',
  },
  leftItem: {
    textAlign: 'right',
    opacity: GLOBALS.naOpacity,
  },
  middleItem: {
    textAlign: 'center',
    marginHorizontal: GLOBALS.marginHorizontal,
  },
  rightItem: {
    textAlign: 'left',
    opacity: GLOBALS.naOpacity,
  },
});

const NavigationItem = ({ title, position }: TProps) => (
  <View style={styles.container}>
    <Text
      style={[
        styles.item,
        title === 'left' ? styles.leftItem : null,
        title === 'middle' ? styles.middleItem : null,
        title === 'right' ? styles.rightItem : null,
      ]}
    >
      {title}
    </Text>
    {position === 'middle' ? <View style={styles.line} /> : null}
  </View>
);

NavigationItem.defaultProps = {
  title: '',
};

export default NavigationItem;
