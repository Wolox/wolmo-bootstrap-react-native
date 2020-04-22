import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionCreators } from '@redux/auth/actions';

import './i18n';
import Swiper from './components/Swiper';

function OnBoardingContainer() {
  const dispatch = useDispatch();
  const skipOnBoarding = () => dispatch(actionCreators.setHasAccessOnBoarding(true));

  return <Swiper onSkip={skipOnBoarding} />;
}

export default memo(OnBoardingContainer);

OnBoardingContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
