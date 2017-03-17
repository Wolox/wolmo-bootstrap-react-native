import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { StatusBar } from 'react-native';

import DrawerMenuContainer from './DrawerMenuContainer';
import DrawerOverlay from './DrawerOverlay';
import { actionCreators as drawerActions, propTypes as drawerPropTypes } from '../../redux/drawerHandlers';
import { STATUS_BAR_IS_FIXED } from '../../utils/constants';
import AppNavigator from '../../AppNavigator';

class DrawerContainer extends Component {
  state = { isHandlingUserInput: false };

  componentWillUnmount() {
    this.handleDrawerClosing();
  }

  handleDrawerClosing = () => {
    this.props.dispatch(drawerActions.drawerToggled(false));
    StatusBar.setHidden(false, 'slide');
  };

  handleDrawerOpening = () => {
    this.props.dispatch(drawerActions.drawerToggled(true));
    this.setState({ isHandlingUserInput: false });
    StatusBar.setHidden(!STATUS_BAR_IS_FIXED, 'slide');
  };

  wrapOnPress = onPress =>
    () => {
      if (!this.state.isHandlingUserInput) {
        if (onPress) {
          onPress();
        }
        this.setState({ isHandlingUserInput: true });
      }
    };

  render() {
    return (
      <Drawer
        content={<DrawerMenuContainer wrapOnPress={this.wrapOnPress} />}
        onOpenStart={this.handleDrawerOpening}
        onCloseStart={this.handleDrawerClosing}
        open={this.props.drawerPresent}
        openDrawerOffset={0.15}
        tapToClose
        panOpenMask={-1}
        type={'overlay'}
      >
        <AppNavigator />
        <DrawerOverlay drawerPresent={this.props.drawerPresent} />
      </Drawer>
    );
  }
}

DrawerContainer.propTypes = {
  drawerPresent: drawerPropTypes.present
};

const mapStateToProps = store => ({
  drawerPresent: store.drawer.present
});

export default connect(mapStateToProps)(DrawerContainer);
