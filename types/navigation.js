// @flow
import type { TScreenProps } from './screenprops';

export type TNavigation = {
  navigate: Function,
  goBack: Function,
};

export type TNavigationProps = {
  screenProps: TScreenProps,
  navigation: TNavigation,
};
