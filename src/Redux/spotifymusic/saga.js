import { fork, take, takeEvery, call, put, all } from "redux-saga/effects";

import { getSpotifyMusicResponse } from "./actions";
import {types} from "./types";
import { apiDirect } from "../../Api/Api";

export function* doGetSpotifyMusic() {
  while (true) {    
    const { payload } = yield take(types.GET_MUSIC);//here we get payload from "getSpotifyMusic" object
    console.log("object22", payload);
    const response = yield call(apiDirect, payload);// here control will go to the apidirect function with payload. the execution stops here till the response comes.
    yield put(getSpotifyMusicResponse(response));// this line will only execute when the apidirect function works and give api response successfully.
  }
}

function* entertainment() {
  yield fork(doGetSpotifyMusic);  //The saga will keep running in the background, waiting for types.GET_MUSIC actions. means when "getSpotifyMusic" gets succesfully dispatches this will work
//   When dispatch(getSpotifyMusic(payload)) is successfully dispatched, the doGetSpotifyMusic saga will immediately execute because it is already running in the background, waiting for types.GET_MUSIC actions.
}
export default entertainment;
