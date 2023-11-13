import React from "react";
import { useSelector } from "react-redux";
import VideoBackgroud from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return;
  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackgroud />
    </div>
  );
};

export default MainContainer;