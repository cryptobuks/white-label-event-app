import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, StyleSheet } from 'react-native';
import { ASSETS, METRICS } from '../../config';

const styles = StyleSheet.create({
  image: {
    width: METRICS.gridSize * 2.5,
    height: METRICS.gridSize * 2.5,
  },
});

export default class ScheduleItemButton extends Component {
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
