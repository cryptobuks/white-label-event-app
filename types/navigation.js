// @flow
import type { TScreenProps } from './screenprops';

export type TNavigationProps = {
  screenProps: TScreenProps,
  navigation: {
    navigate: Function,
    goBack: Function,
  },
};
