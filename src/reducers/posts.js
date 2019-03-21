import {REQUEST_POSTS, REQUEST_MORE_POSTS, RECEIVE_POSTS} from '../actionTypes';

const initialState = {
  loading: true,  
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
        loading: true
      }

    case RECEIVE_POSTS:
      return { 
        ...state, 
        loading: false, 
        items: action.posts 
      };
    
    default:
      return state
  }
}