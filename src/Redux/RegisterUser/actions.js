import { types } from "./types";

export const RegisterUser = (payload) => {  
  return {
    type: types.REGISTER_USER,
    payload,                              
  };
};

export const RegisterUserResponse = (payload) => {  
  return {
    type: types.REGISTER_USER_RESPONSE,
    payload,
  };
};

export const RegisterUserClear = () => ({
  type: types.REGISTER_USER_CLEAR,
});