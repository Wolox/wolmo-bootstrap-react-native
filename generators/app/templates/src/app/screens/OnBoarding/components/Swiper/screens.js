import React from 'react';

import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';
import ThirdScreen from './components/ThirdScreen';

const screenNames = {
  FirstScreen: 'FirstScreen',
  SecondScreen: 'SecondScreen',
  ThirdScreen: 'ThirdScreen'
};

export const screensComponents = {
  [screenNames.FirstScreen]: <FirstScreen />,
  [screenNames.SecondScreen]: <SecondScreen />,
  [screenNames.ThirdScreen]: <ThirdScreen />
};

export default screenNames;
