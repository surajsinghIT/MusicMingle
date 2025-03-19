import { getSpotifyMusic } from "./actions";
import { types } from "./types";

const initialState = {
  //spotify music
  SpotifyMusic: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_MUSIC_RESPONSE:
      console.log("xxx", action.payload);
      return {
        ...state,
        SpotifyMusic: action.payload,
      };
    case types.GET_MUSIC_CLEAR:
      return {
        ...state,
        SpotifyMusic: {},
      };
    default:
      return state; 
  }
};
