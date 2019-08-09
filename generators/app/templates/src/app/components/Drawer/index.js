import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import store from '@redux/store';

import styles, { medium } from './styles';
import Page from './components/Page';

const PAGE_EXAMPLE_1 = 'PageExample1';
const PAGE_EXAMPLE_2 = 'PageExample2';

class Drawer extends Component {
  navigateToScreen = routeName => () => store.dispatch(NavigationActions.navigate({ routeName }));

  render() {
    return (
      <ScrollView bounces={false} contentContainerStyle={styles.container}>
        <Page
          title={PAGE_EXAMPLE_1}
          textProps={medium}
          onPress={this.navigateToScreen(PAGE_EXAMPLE_1)}
          image={null} // If you need to add an image you can do it from here
        />
        <Page title={PAGE_EXAMPLE_2} textProps={medium} onPress={this.navigateToScreen(PAGE_EXAMPLE_2)} />
      </ScrollView>
    );
  }
}

export default Drawer;
