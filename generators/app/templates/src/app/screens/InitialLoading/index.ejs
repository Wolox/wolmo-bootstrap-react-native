import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import withLoadable from '@components/Loadable';
import Routes from '@constants/routes';

const initialLoadingSelector = state => state.auth.initialLoading;

const InitialLoading = ({ navigation }) => {
  const initialLoading = useSelector(initialLoadingSelector);
  const currentUser = useSelector(state => state.auth.currentUser);
  if (!initialLoading) {
    navigation.navigate(currentUser ? Routes.App : Routes.Auth);
  }
  return null;
};

InitialLoading.propTypes = {
  // TODO: complete this shape
  currentUser: PropTypes.shape(),
  initialLoading: PropTypes.bool,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};

export default withLoadable(() => useSelector(initialLoadingSelector))(InitialLoading);
