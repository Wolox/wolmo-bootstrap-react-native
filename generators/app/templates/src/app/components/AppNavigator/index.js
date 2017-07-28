import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import PropTypes from 'prop-types';

import Navigator from '../../screens';

const AppNavigator = props => {
  const { dispatch, nav, ...navigatorProps } = props;
  return <Navigator {...navigatorProps} navigation={addNavigationHelpers({ dispatch, state: nav })} />;
};

AppNavigator.propTypes = {
  nav: PropTypes.any // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = store => ({ nav: store.nav });

export default connect(mapStateToProps)(AppNavigator);
