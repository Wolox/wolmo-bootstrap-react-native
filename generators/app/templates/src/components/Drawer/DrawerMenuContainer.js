import React, { Component } from 'react';
import { connect } from 'react-redux';

import DrawerMenu from './DrawerMenu';
import { actionCreators as drawerActions } from '../../redux/drawerHandlers';

class DrawerMenuContainer extends Component {
  handleCloseDrawer = () => {
    this.props.dispatch(drawerActions.drawerToggled(false));
  };

  render() {
    return <DrawerMenu onCloseDrawer={this.handleCloseDrawer} wrapOnPress={this.props.wrapOnPress} />;
  }
}

DrawerMenuContainer.propTypes = {
  wrapOnPress: React.PropTypes.func.isRequired
};

export default connect()(DrawerMenuContainer);
