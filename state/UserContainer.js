import { AsyncStorage } from 'react-native';
import { Container } from 'unstated';
import type { TUser } from '../types/authentication';

const USER_STORAGE = 'USER_STORAGE';

type UserState = ?TUser;

export default class UserContainer extends Container<UserState> {
  constructor() {
    super();
    this.getFromStorage();
  }

  state = {
    id: null,
    firstName: null,
    picture: null,
  };

  async getFromStorage() {
    const result = await AsyncStorage.getItem(USER_STORAGE);

    if (result) {
      this.setState(JSON.parse(result));
    }
  }

  async updateStorage() {
    try {
      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(this.state));
    } catch (error) {
      // TODO #62 add error handling
      console.error('Error updating storage', error);
    }
  }

  isAuthenticatedUser = () => this.state.firstName;

  setUser(user: TUser) {
    this.setState(user);
    this.updateStorage();
  }
}
