import {REQUEST_POSTS, REQUEST_MORE_POSTS, RECEIVE_POSTS} from '../actionTypes';

const initialState = {
  loading: false,
  loadingMore: false,
  items: [],
}

export default function posts(state = initialState, action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return {
        ...state,
        loading: true
      }

    case REQUEST_MORE_POSTS:
      return {
        ...state,
        loadingMore: true
      }

    case RECEIVE_POSTS:
      return { 
        ...state, 
        loading: false, 
        loadingMore: false,
        items: action.posts 
      };
    
    default:
      return state
  }
}