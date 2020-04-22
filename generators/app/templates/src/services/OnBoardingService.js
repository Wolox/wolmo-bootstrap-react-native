import AsyncStorage from '@react-native-community/async-storage';

const ONBOARDING_KEY = '@OnBoarding:hasAccess';

export const setOnBoardingAccess = value => AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(value));
export const getOnBoardingAccess = () => AsyncStorage.getItem(ONBOARDING_KEY).then(JSON.parse);
