// Facebook Authenthication
const FB_APP_ID = '2049634398613694';
// Google Authenthication
const ANDROID_CLIENT_ID = '' ;
const IOS_CLIENT_ID = '';

export const handleFacebookLogin = async () => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
    permissions: ['public_profile'],
    behavior: 'web',
  });

  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const userInfoResponse = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,picture.type(large)`);
    return userInfoResponse.json();
  }
  return {};
};

export const handleGoogleLogin = async () => {
  const result = await Expo.Google.logInAsync({
    androidClientId: ANDROID_CLIENT_ID,
    iosClientId: IOS_CLIENT_ID,
    scopes: ['profile', 'email'],
  });

  if (result.type === 'success') {
    const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${result.accessToken}`},
    });
    return userInfoResponse.json();
  }
  return {};
};
