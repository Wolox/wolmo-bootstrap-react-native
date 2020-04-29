import React, { memo } from 'react';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';

import './i18n';
import Swiper from './components/Swiper';

function OnBoarding({ navigation }: Navigation) {
  const handleSkipOnBoarding = () => navigation.navigate(Routes.App);
  return <Swiper onSkip={handleSkipOnBoarding} />;
}

export default memo(OnBoarding);
