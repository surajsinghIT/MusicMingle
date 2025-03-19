import { fork } from "redux-saga/effects";

import spotifyMusicSaga from "./spotifymusic/saga"
import RegisterUserSaga from "./RegisterUser/saga"

function* rootSaga() {
  yield fork(spotifyMusicSaga);  
  yield fork(RegisterUserSaga);
}

export default rootSaga;

// Second method of writing rootSaga 

// import { all } from 'redux-saga/effects';
// import exampleSaga from './sagas/exampleSaga';

// export default function* rootSaga() {
//   yield all([
//     exampleSaga(), // Add your sagas here
//   ]);
// }

