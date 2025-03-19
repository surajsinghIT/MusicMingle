import { combineReducers } from 'redux';
import spotifyMusicReducer from './spotifymusic/reducers'
import RegisterUserReducer from './RegisterUser/reducers'


const rootReducer = combineReducers({
  spotifyMusicStore: spotifyMusicReducer,
  registerUserStore: RegisterUserReducer // Add your reducers here
});

export default rootReducer;

