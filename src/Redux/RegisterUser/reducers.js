import { getSpotifyMusic } from "./actions";
import { types } from "./types";

const initialState = {
  //spotify music
  RegisterUser: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_RESPONSE:
      console.log("PAYLOAD", action.payload);
      return {
        ...state,
        RegisterUser: action.payload,
      };
    case types.REGISTER_USER_CLEAR:
      return {
        ...state,
        RegisterUser: {},
      };
    default:
      return state; 
  }
};
