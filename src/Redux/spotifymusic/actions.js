//Music api

import { types } from "./types";

export const getSpotifyMusic = (payload) => {
  console.log("payload", payload);
  return {
    type: types.GET_MUSIC,
    payload,                              // 👈 This is shorthand for `payload: payload` .it will automatically converted into
                                          //     {return {
                                        //     type: "GET_MUSIC",
                                        //     payload: payload,  // 👈 Explicit key-value pair
                                        //   };}
  };
};

console.log(
  "getSpotifyMusic",
  getSpotifyMusic({ URL: "https://api.example.com", method: "GET" })
);

export const getSpotifyMusicResponse = (payload) => {
  console.log("apiresonse", payload);
  return {
    type: types.GET_MUSIC_RESPONSE,
    payload,
  };
};
export const getSpotifyMusicClear = () => ({
  type: types.GET_MUSIC_CLEAR,
});

//   implicit arrow function :-This works because arrow functions without curly braces automatically return the value inside parentheses.
// If you want to use an implicit return, you need to wrap the object in parentheses:

// export const getSpotifyMusic = (payload) => ({
//     type: types.GET_MUSIC,
//     payload,
//   });

//   explicit arrow function :- it needs 'return' statement to return the value
// export const getSpotifyMusic = (payload) => {
//     console.log("payload", payload);
//     return {  // You need to return this object
//       type: types.GET_MUSIC,
//       payload,
//     };
//   };
