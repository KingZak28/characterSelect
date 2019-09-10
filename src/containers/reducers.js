import {CHANGE_SEARCH_FIELD,
  REQUEST_CHARACTERS_PENDING,
  REQUEST_CHARACTERS_SUCCESS,
  REQUEST_CHARACTERS_FAILED
} from './constants';

//Our initial state is the redux store for the search characters reducer.
const initialStateSearch = {
  searchField: ''
}

//Our reducer for the search characters action, a reducer (a pure function in and of itself) will take in the actionand produce the state
//We give our reducer default parameters incase it is empty
export const searchCharacters = (state = initialStateSearch,action={}) => {
  //We set this in the action.js file
  switch(action.type){
    case CHANGE_SEARCH_FIELD:
      //We're returning a new state because state is read only we can't modigfy the old state
      // In the new state were updating the searchfield with the new payload specified by the user in the action
      //Object.assign({},state,{searchField: action.payload}) is the same as we have below its just using new spread operator.
      return {...state, searchField: action.payload}
    default:
    return state;
  }
}

//Because the initial state is read only we don't update the search state and create a new one for characters
const initialStateCharacters = {
  isPending: false,
  characters: [],
  error: ''
}
//The request characters reducer
export const requestCharacters = (state=initialStateCharacters,action={}) =>{
  switch(action.type){
    case REQUEST_CHARACTERS_PENDING:
      return {...state,isPending: true}
    case REQUEST_CHARACTERS_SUCCESS:
      return {...state,isPending:false,characters:action.payload}
    case REQUEST_CHARACTERS_FAILED:
      return {...state,isPending:false, error:action.payload}
    default:
    return state
  }
}
