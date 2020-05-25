import AsyncStorage from '@react-native-community/async-storage';

const ONBOARDING_KEY = '@OnBoarding:hasAccess';

export const setOnBoardingAccess = (value: boolean) =>
  AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(value));
export const getOnBoardingAccess = () =>
  AsyncStorage.getItem(ONBOARDING_KEY).then(value => JSON.parse(`${value}`));
