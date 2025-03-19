import axios from "axios";
// import { useNavigate as navigate } from "react-router-dom";
import _ from "lodash";


export const apiDirect = async ({ URL, payload, isJSON, method }) => {
  console.log("POST DIRECT", URL, payload, isJSON, method);
  return axios({
    method: method ? method : "post",
    url: URL,
    data: payload,
    headers: isJSON
      ? {accept: 'application/json', 'content-type': 'application/json'}
      : ''
      // { "Content-Type": "multipart/form-data" },
  })
    .then((response) => {
      console.log("response", response);
      console.log("Response Status:", response?.status);
      if ((response?.status === 200 || success)) {   
        console.log("api give success")               
        return {
          status: true,       //here status and payload we receive when we do the -> const musicStore = useSelector((state)=> state.spotifyMusicStore) , here musicStore will contain the status and payload in which we have the api data
          payload: response.data,
        };
      } else {
        return {
          status: false,
          error: {
            message: "facing error while calling api ",
          },
        };
      }
    })
    .catch((error) => {
      console.log("errorData", error, error.response, error.message);
      if (error.response != undefined && error.response?.status === 401) {
        // console.log("erroData clear local storage");
        alert("Your Session is Logged Out. Please Sign in.");
        window.alert = () => false;
        localStorage.clear();
        // console.log("erroData local storage cleared");
        // window.open(API_LIST.SESSION_EXPIRED_URL, "_self");
        // console.log("go to window");
        // alert("Session is expired.")
        // navigate("/", { sessionExpired: true });
        // console.log("errorData, history");
      }
      return {
        status: "error",
        error,
      };
    });
};