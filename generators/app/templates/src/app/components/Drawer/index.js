import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';
import Page from './components/Page';

class Drawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction); // eslint-disable-line
  };

  render() {
    return (
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <Page
          title="PageExample1"
          textProps={{ medium: 'medium' }}
          onPress={this.navigateToScreen('PageExample1')}
          image={null} // If you need to add an image you can do it from here
        />
        <Page
          title="PageExample2"
          textProps={{ medium: 'medium' }}
          onPress={this.navigateToScreen('PageExample2')}
        />
      </ScrollView>
    );
  }
}

Drawer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Drawer;
