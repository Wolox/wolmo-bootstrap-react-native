export const getCurrentRouteName = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

export const getPreviousRouteName = navigationState => {
  if (!navigationState || !navigationState.index) {
    return null;
  }
  return navigationState.routes[navigationState.index - 1].routeName;
};
