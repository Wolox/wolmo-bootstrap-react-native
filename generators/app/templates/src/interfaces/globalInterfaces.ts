import { NavigationScreenComponent } from 'react-navigation';

import { NavOptionsType } from './navigation';

type Key = string | number;

export type GenericObjectInterface<T> = {
  [key in Key]: T;
};

export interface Loadable {
  loading: boolean;
}

export type StringObject = GenericObjectInterface<string>;

export type NumberObject = GenericObjectInterface<number>;

export type ScreenObj = {
  [key: string]: NavigationScreenComponent<{}, {}>;
};

export type ScreenRoute = {
  [x: string]: {
    screen: NavigationScreenComponent<{}, {}>;
    navigationOptions: NavOptionsType;
  };
};
