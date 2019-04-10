import { PureComponent } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import Loadable from '../../components/Loadable';
import Routes from '../../../constants/routes';

class InitialLoading extends PureComponent {
  static getDerivedStateFromProps(props) {
    if (!props.initialLoading) {
      props.navigation.replace(props.currentUser ? Routes.Home : Routes.Login);
    }
    return null;
  }

  state = {};

  render() {
    return null;
  }
}

const mapStateToProps = store => ({
  currentUser: store.auth.currentUser,
  initialLoading: store.auth.initialLoading
});

const enhance = compose(connect(mapStateToProps), Loadable(props => props.initialLoading));

export default enhance(InitialLoading);
