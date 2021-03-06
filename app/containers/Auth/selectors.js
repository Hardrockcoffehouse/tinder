import { createSelector } from 'reselect';

const selectAuth = () => (state) => state.get('auth');

const selectLogin = () => createSelector(
  selectAuth(),
  (authState) => authState.get('login')
);

const selectPassword = () => createSelector(
  selectAuth(),
  (authState) => authState.get('password')
);

const selectFacebookToken = () => createSelector(
  selectAuth(),
  (authState) => authState.get('fbToken')
);

const selectAuthToken = () => createSelector(
  selectAuth(),
  (authState) => {
    if (!authState) {
      return undefined;
    }
    return authState.get('userToken');
  }
);

const selectId = () => createSelector(
  selectAuth(),
  (authState) => authState.get('userId')
);

export {
  selectAuth,
  selectLogin,
  selectPassword,
  selectId,
  selectFacebookToken,
  selectAuthToken,
};
