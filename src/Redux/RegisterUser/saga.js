import { fork, take, call, put} from "redux-saga/effects";

import { getSpotifyMusicResponse, RegisterUserResponse } from "./actions";
import {types} from "./types";
import { apiDirect } from "../../Api/Api";

export function* doRegisterUser() {
  while (true) {    
    const { payload } = yield take(types.REGISTER_USER);//here we get payload from "getSpotifyMusic" object
    console.log("object22", payload);
    const response = yield call(apiDirect, payload);// here control will go to the apidirect function with payload. the execution stops here till the response comes.
    yield put(RegisterUserResponse(response));// this line will only execute when the apidirect function works and give api response successfully.
  }
}

function* RegisterUser() {
yield fork(doRegisterUser); 
}
export default RegisterUser;
