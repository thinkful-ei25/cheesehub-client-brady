import {
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS,
  FETCH_CHEESES_ERROR
} from '../actions/cheese';

const intialState = {
  cheeses: [],
  loading: false,
  error: null
}

export default function cheeseReducer(state = intialState, action) {
  if(action.type === FETCH_CHEESES_REQUEST) {
    return Object.assign({}, state, { loading: true, error: null});
  }
  else if( action.type === FETCH_CHEESES_SUCCESS) {
    return Object.assign({}, state, {loading: false, error: null, cheeses: action.cheeses});
  } else if(action.type === FETCH_CHEESES_ERROR) {
    return Object.assign({}, state, {loading: false, error: true});
  }

  return state;
}
