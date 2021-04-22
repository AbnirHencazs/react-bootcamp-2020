import { ADD_FAVOURITE, SET_SEARCH_QUERY, SET_THEME, SET_USER, UNSET_USER } from '../utils/constants';

export default function globalReducer(state, action) {
  switch (action.type) {
    case SET_THEME:
      return { ...state, theme: action.payload };
      break;
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SET_USER:
      return { ...state, user:{ ...action.payload, authenticated: true } }
    case UNSET_USER:
      return { ...state, user: { ...action.payload, authenticated: false } }
    case ADD_FAVOURITE:
      
      return { ...state, favourites:[ ...state.favourites, action.payload]}
    default:
      return { ...state };
      break;
  }
}
