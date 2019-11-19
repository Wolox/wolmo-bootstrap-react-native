import AsyncStorage from '@react-native-community/async-storage';

export const setOnBoardingAccess = () => AsyncStorage.setItem('@Auth:onBoarding', JSON.stringify(true));
export const getOnBoardingAccess = () => AsyncStorage.getItem('@Auth:onBoarding').then(JSON.parse);
