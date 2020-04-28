import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';

import './i18n';
import Swiper from './components/Swiper';

function OnBoardingContainer({ navigation: { navigate } }: Navigation) {
  const skipOnBoarding = () => navigate(Routes.App);

  return <Swiper onSkip={skipOnBoarding} />;
}

export default memo(OnBoardingContainer);

OnBoardingContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};
