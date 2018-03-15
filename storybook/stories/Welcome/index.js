import React from 'react';
import { View, Text } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      fontSize: 18,
      marginBottom: 18,
      textAlign: 'center',
    },
    content: {
      fontSize: 12,
      marginBottom: 10,
      lineHeight: 18,
      textAlign: 'center',
    },
  };

  showApp(event) {
    event.preventDefault();
    this.props.showApp();
  }

  render() {
    return (
      <View style={this.styles.wrapper}>
        <Text style={this.styles.header}>Welcome to our white-label-event-app Storybook!</Text>
        <Text style={this.styles.content}>
          As our component library grows, so will this Storybook. It gives a great overview of all
          the components. Give it a go!
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: () => {},
};
