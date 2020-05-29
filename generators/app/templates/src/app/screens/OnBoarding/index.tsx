import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '@redux/auth/actions';

import './i18n';
import Swiper from './components/Swiper';

function OnBoardingContainer() {
  const dispatch = useDispatch();
  const handleSkipOnBoarding = () => dispatch(actionCreators.setHasAccessOnBoarding(true));
  return <Swiper onSkip={handleSkipOnBoarding} />;
}

export default memo(OnBoardingContainer);
