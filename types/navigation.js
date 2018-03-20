// @flow

export type TNavigation = {
  navigate: Function,
  goBack: Function,
};

export type TNavigationProps = {
  screenProps: Object,
  navigation: TNavigation,
};
