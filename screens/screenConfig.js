import { StackNavigator } from 'react-navigation';
import type { StackNavigatorConfig } from 'react-navigation/src/TypeDefinition';
import { HomeContainer, LoginContainer, PersonalScheduleContainer } from './';

export const HOME = 'Home';
export const PERSONAL_SCHEDULE = 'PersonalSchedule';
export const LOGIN = 'Login';
export const MAIN = 'Main';

type TRouteName = HOME | LOGIN;

const createMainNavigator = (initialRouteName: TRouteName): StackNavigatorConfig =>
  StackNavigator(
    {
      [HOME]: { screen: HomeContainer },
      [LOGIN]: { screen: LoginContainer },
    },
    {
      initialRouteName,
      navigationOptions: {
        header: null,
        gesturesEnabled: false,
      },
    },
  );

export const createRootStackNavigator = (initialRouteName: TRouteName): StackNavigatorConfig =>
  StackNavigator(
    {
      [MAIN]: {
        screen: createMainNavigator(initialRouteName),
      },
      [PERSONAL_SCHEDULE]: {
        screen: PersonalScheduleContainer,
      },
    },
    {
      initialRouteName: 'Main',
      mode: 'modal',
      headerMode: 'none',
      cardStyle: {
        shadowOpacity: 0,
      },
    },
  );
