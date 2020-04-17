import { NavigationStackProp, NavigationStackOptions } from 'react-navigation-stack';
import { NavigationBottomTabOptions } from 'react-navigation-tabs';

export interface Navigation {
  navigation: NavigationStackProp;
}

type navOptionsMethod = (navParams: Navigation) => NavigationStackOptions;

export type NavOptionsType = NavigationStackOptions | navOptionsMethod;

export interface AppScreensNavOptions {
  [screenName: string]: NavOptionsType;
}

export interface AppTabOptions {
  [screenName: string]: boolean | string | number | object | NavigationBottomTabOptions;
}
export interface TabProps {
  focused: boolean;
  routeName: string;
  onPress: () => void;
  index: number;
}

export interface TabBarIconProps extends TabProps {
  route: string;
}
