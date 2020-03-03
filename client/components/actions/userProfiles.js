import request from 'superagent'

export const RECEIVE_PROFILE_INFO = "RECEIVE_PROFILE_INFO";

// Asynchronous action (retrieving data from database)
export const receiveProfileInfo = profileInfo => {
  return {
    type: RECEIVE_PROFILE_INFO,
    profileInfo
  };
};

export function fetchProfileInfo(user) {
  return dispatch => {
    return request
      .get(`http://localhost:3000/api/v1/users/${user}`)
      .then(res => {
      dispatch(receiveProfileInfo(res.body));
    });
  };
}
