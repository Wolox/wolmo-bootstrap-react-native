import { RouteProp, NavigationProp, NavigationState } from '@react-navigation/native';

export interface Navigation {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<Record<string, object | undefined>, string, NavigationState, {}, {}>;
}
