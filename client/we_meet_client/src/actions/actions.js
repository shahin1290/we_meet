import * as types from './actionTypes';

const url = 'http://localhost:3000/auth'

function receiveUserData(json) {
  return {type: types.RECEIVE_USER_DATA, user: json.data.data};
}

function dispatch() {
  return dispatch => {
    // Here we are making a call to the api
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        // 'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => dispatch(receiveUserData(json)));
  };
}

export default { receiveUserData, dispatch}