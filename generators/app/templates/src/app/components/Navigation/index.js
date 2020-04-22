import * as React from 'react';

export const navigationRef = React.createRef();

export default function useNavigation() {
  return navigationRef.current;
}
