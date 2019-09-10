import {CHANGE_SEARCH_FIELD,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: 'CHANGE_SEARCH_FIELD',
    payload: text
})

//asynchronous action
// We can use redux thunk middleware to return functions and our asynch request is a function and not an object like setSearchField
export const requestCharacters = () => (dispatch) => {
  dispatch({type: REQUEST_CHARACTERS_PENDING})
  fetch('https://my-json-server.typicode.com/KingZak28/demo/Characters')
    .then(response => response.json())
    .then(data => dispatch({type: REQUEST_CHARACTERS_SUCCESS, payload: data}))
    .catch(err => dispatch({type: REQUEST_CHARACTERS_FAILED, payload: err}))
}
