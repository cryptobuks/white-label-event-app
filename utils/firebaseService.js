import * as firebase from 'firebase';
import firebaseConfig from './firebaseConfig.json';

type subscribeToTrackArgs = {
  trackId: string,
  currentUserId: string,
  subscribedUsers?: Array<{}>,
};
export function subscribeToTrack({
  trackId,
  currentUserId,
  subscribedUsers = [],
}: subscribeToTrackArgs) {
  const userIds = [...subscribedUsers];
  if (subscribedUsers.indexOf(currentUserId) !== -1) {
    userIds.pop(currentUserId);
  } else {
    userIds.push(currentUserId);
  }

  firebase
    .database()
    .ref(`tracks/${trackId}`)
    .set({ userIds });
}

export function initializeFirebase() {
  // Initialize Firebase
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    console.warn('Add your own firebaseConfig.json file in the folder /utils/firebaseConfig.json');
  } else {
    firebase.initializeApp(firebaseConfig);
  }
}

export function listenFirebaseChanges(trackId: string): firebase.database.Reference {
  return firebase.database().ref(`tracks/${trackId}`);
}
