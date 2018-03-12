import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import ASSETS from '../config/assets';
import Metrics from '../config/gridSizes';

const styles = StyleSheet.create({
  image: {
    width: Metrics.gridSize * 2.5,
    height: Metrics.gridSize * 2.5,
  },
});

export default class ScheduleButton extends Component {
  state = {
    isActive: false,
  }

  render() {
    const { isActive } = this.state;
    return (
      <TouchableWithoutFeedback onPress={() => this.setState({ isActive: !isActive })}>
        <Image style={styles.image} source={isActive ? ASSETS.buttonImgActive : ASSETS.buttonImg} />
      </TouchableWithoutFeedback>
    );
  }
}
