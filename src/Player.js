import React, { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function Player({ accessToken, trackUri }) {
  const [play, setPlay] = useState(false);

  useEffect(() => setPlay(true), [trackUri]); //plays songs when selected instead of having to click play

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      play={play}
      callback={(state) => {
        if (!state.isPlaying) setPlay(false);
      }}
      uris={trackUri ? [trackUri] : []}
    />
  );
}
