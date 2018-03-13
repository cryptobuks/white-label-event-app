import firebase from 'firebase';

// Authentication parameters
const FACEBOOK_APPLICATION_ID = '2049634398613694';

const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.addScope('public_profile');
facebookProvider.setCustomParameters({ client_id: FACEBOOK_APPLICATION_ID });

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.addScope('profile');

const githubProvider = new firebase.auth.GithubAuthProvider();
githubProvider.addScope('read:user');

export const authenticationProviders = {
  facebook: facebookProvider,
  google: googleProvider,
  github: githubProvider,
};
