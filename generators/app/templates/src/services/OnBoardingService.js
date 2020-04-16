import AsyncStorage from '@react-native-community/async-storage';

const ONBOARDING_KEY = '@OnBoarding:hasAccess';

export const setOnBoardingAccess = () => AsyncStorage.setItem(ONBOARDING_KEY, JSON.stringify(true));
export const getOnBoardingAccess = () => AsyncStorage.getItem(ONBOARDING_KEY).then(JSON.parse);
