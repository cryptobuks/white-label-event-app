// @flow
import Expo from 'expo';
import { FB_APP_ID, GOOGLE_APP_ID } from '../config/keys';
import type { TFacebookUserInfo } from '../types/authentication';

export const handleFacebookLogin = async (): Promise<TFacebookUserInfo> => {
  const result = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
    permissions: ['public_profile'],
    behavior: 'web',
  });

  const { type, token } = result;

  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,picture.type(large)`,
    );
    return userInfoResponse.json();
  }
  // TODO #62 add error handling
  return Promise.reject(new Error(`Login to Facebook was not successful${result}`));
};

export const handleGoogleLogin = async (): Promise<*> => {
  const result = await Expo.Google.logInAsync({
    androidClientId: GOOGLE_APP_ID.clientIdAndroid,
    iosClientId: GOOGLE_APP_ID.clientIdIos,
    scopes: ['profile', 'email'],
  });

  if (result.type === 'success') {
    const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${result.accessToken}` },
    });
    return userInfoResponse.json();
  }
  // TODO #62 add error handling
  return Promise.reject(new Error(`Login to Facebook was not successful${result}`));
};
