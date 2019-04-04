import React, { Component } from 'react';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer';
import { StatusBar } from 'react-native';

import { actionCreators as drawerActions } from '../../../redux/drawer/actions';
import { propTypes as drawerPropTypes } from '../../../redux/drawer/reducer';
import { STATUS_BAR_IS_FIXED } from '../../../constants/platform';
import AppNavigator from '../AppNavigator';

import DrawerOverlay from './components/DrawerOverlay';
import DrawerMenu from './components/DrawerMenu';

class DrawerContainer extends Component {
  state = { isHandlingUserInput: false };

  componentWillUnmount() {
    this.handleDrawerClosing();
  }

  handleDrawerClosing = () => {
    const { dispatch } = this.props;
    dispatch(drawerActions.drawerToggled(false));
    StatusBar.setHidden(false, 'slide');
  };

  handleDrawerOpening = () => {
    const { dispatch } = this.props;
    dispatch(drawerActions.drawerToggled(true));
    this.setState({ isHandlingUserInput: false });
    StatusBar.setHidden(!STATUS_BAR_IS_FIXED, 'slide');
  };

  wrapOnPress = onPress => () => {
    const { isHandlingUserInput } = this.state;
    if (!isHandlingUserInput) {
      if (onPress) {
        onPress();
      }
      this.setState({ isHandlingUserInput: true });
    }
  };

  render() {
    const { drawerPresent } = this.props;
    return (
      <Drawer
        content={<DrawerMenu wrapOnPress={this.wrapOnPress} />}
        onOpenStart={this.handleDrawerOpening}
        onCloseStart={this.handleDrawerClosing}
        open={drawerPresent}
        openDrawerOffset={0.15}
        tapToClose
        panOpenMask={-1}
        type="overlay"
      >
        <AppNavigator />
        <DrawerOverlay drawerPresent={drawerPresent} />
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
