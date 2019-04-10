import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as drawerActions } from '../../../../../redux/drawer/actions';

import DrawerMenu from './layout';

class DrawerMenuContainer extends Component {
  handleCloseDrawer = () => {
    const { dispatch } = this.props;
    dispatch(drawerActions.drawerToggled(false));
  };

  render() {
    const { wrapOnPress } = this.props;
    return <DrawerMenu onCloseDrawer={this.handleCloseDrawer} wrapOnPress={wrapOnPress} />;
  }
}

DrawerMenuContainer.propTypes = {
  wrapOnPress: PropTypes.func.isRequired
};

export default connect()(DrawerMenuContainer);
