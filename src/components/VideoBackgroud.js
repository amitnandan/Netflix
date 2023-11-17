import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackgroud = ({ movieId }) => {
  //fetch trailer video

  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  if (!trailerVideo) {
    return <div>Loading...</div>; // You can replace this with your own loading state or placeholder
  }
  return (
    <div className="bg-gradient-to-t from-black">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&playlist=${trailerVideo?.key}&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackgroud;
