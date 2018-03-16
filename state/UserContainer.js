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

  state = {};

  async getFromStorage() {
    const result = await AsyncStorage.getItem(USER_STORAGE);

    if (result) {
      // console.log('Read AsyncStorage', USER_STORAGE, result);
      this.setState(JSON.parse(result));
    }
  }

  async updateStorage() {
    try {
      await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(this.state));
    } catch (error) {
      console.error('Error updating storage', error);
    }
  }

  isAuthenticatedUser() {
    return this.state.first_name;
  }

  setUser(user: TUser) {
    this.setState(user);
    this.updateStorage();
  }
}
