import { useSelector } from 'react-redux';
import Loadable from '@components/Loadable';
import Routes from '@constants/routes';

const initialLoadingSelector = state => state.auth.initialLoading;

const InitialLoading = ({ navigation }) => {
  const initialLoading = useSelector(initialLoadingSelector);
  const currentUser = useSelector(state => state.auth.currentUser);

  if (!initialLoading) navigation.replace(currentUser ? Routes.Home : Routes.Login);

  return null;
};

export default Loadable(() => useSelector(initialLoadingSelector))(InitialLoading);
