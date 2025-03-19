import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import SongsDetailShimmer from "../../Common/ShimmerScreen";
import ShimmerScreen from "../../Common/ShimmerScreen";
import "./SongsDetails.css";
import { Navigate, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import NoData from "../../NoDataFound/NoData";
import {
  getSpotifyMusic,
  getSpotifyMusicClear,
} from "../../../Redux/spotifymusic/actions";
import { useDispatch, useSelector } from "react-redux";

function SongsDetailSection() {
  const [Data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [remove, setRemove] = useState(true);
  const [error, setError] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const title = params.get("title");
  console.log("title", title);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const hasFetched = useRef();
  const musicStore = useSelector((state) => state.spotifyMusicStore); // here spotifyMusic i have taken from rootreducer.
  // console.log("hasFetched",!hasFetched.current)
  // what is hasFetched ?
  //     On the initial render, hasFetched.current is undefined because useRef() initializes the value to undefined by default.
  // undefined is a falsy value in JavaScript, so the condition if (title && !hasFetched.current) evaluates to true (since !undefined is true).
  // As a result, the control enters the if block, the API is called, and hasFetched.current is set to true.
  const API_URL = `https://v1.nocodeapi.com/surajsingh/spotify/zpXKiKxmnGkXmFkA/search?q=${title}&type=track`;

  useEffect(() => {
    dispatch(
      getSpotifyMusic({
        URL: API_URL ? API_URL : "", // Ensure proper URL formatting
        method: "GET",
        isJSON: true,
        // token: authStore.payload.token,
      })
    );
  }, [title]);

  useEffect(() => {
    console.log("useEffect triggered: musicStore", musicStore);

    if (!_.isEmpty(musicStore)) {
      const musicData = musicStore?.SpotifyMusic;
      console.log("musicData:", musicData);

      if (musicData?.status) {
        console.log("✅ Success Case - Data Found");
        setData(musicData?.payload?.tracks?.items || []);
        dispatch(getSpotifyMusicClear({}));
      } else {
        console.log("❌ Else Case - Data Invalid or Missing");
        setError(true);
        console.log("ErrorSooraj:", true); // Always logs true
      }
    }
  }, [musicStore]);

  useEffect(() => {
    //  console.log("DATAAA",Data)
  }, []);

  // useEffect(() => {
  //   if (title ){
  //     setisLoading(true);
  //     const fetchData = async () => {
  //       try {
  //         const apiUrl = `https://v1.nocodeapi.com/surajsingh/spotify/zpXKiKxmnGkXmFkA/search?q=${title}&type=track`;
  //         const response = await axios.get(apiUrl);
  //         setisLoading(false)
  //         console.log("Response", response.data.tracks.items);
  //         setData(response.data.tracks.items);
  //       } catch (error) {
  //         setError(true);
  //         console.log("Error:", error);
  //       }
  //     };
  //     fetchData();
  //     // hasFetched.current = true;
  //   }
  //   }, [title]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  };

  //   const handleOnclick = async (event) => {
  //     event.preventDefault();
  //     await getSpotifyTracks();
  //     setRemove(false);
  //   }

  //   const handleChange = (event) => {
  //     setKeyword(event.target.value);
  //   }

  const handleAudioPlay = (event) => {
    if (currentAudio && currentAudio !== event.target) {
      currentAudio.pause();
    }
    setCurrentAudio(event.target);
  };

  const handleBack = () => {
    localStorage.setItem("backClicked", "true");
    navigate("/");
  };

  return (
    <>
      {error ? (
        <NoData txt={"Something went wrong, please try again"} />
      ) : (
        <div className="container p-2">
          <button type="button" class="btn btn-secondary" onClick={handleBack}>
            Back
          </button>
          <div className="row p-custom">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="card">
                      <ShimmerScreen type="image" />
                      <div className="card-body">
                        <ShimmerScreen type="text" />
                        <ShimmerScreen type="text" />
                      </div>
                    </div>
                  </div>
                ))
              : Data &&
                Data.map((e, index) => (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={e.album?.images[0]?.url}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {truncateText(e.album?.name, 20)}
                        </h5>
                        <p className="card-text">
                          Artist: {e.artists[0]?.name}
                        </p>
                        <audio
                          src={e.preview_url}
                          controls
                          style={{ width: "100%" }}
                          onPlay={handleAudioPlay}
                        ></audio>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SongsDetailSection;
