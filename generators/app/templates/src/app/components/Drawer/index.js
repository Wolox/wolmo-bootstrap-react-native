import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import store from '@redux/store';

import styles from './styles';
import Page from './components/Page';

class Drawer extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    store.dispatch(navigateAction);
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

export default Drawer;
