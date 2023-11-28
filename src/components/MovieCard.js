import React from "react";
import { IMG_CON } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return;
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Name " src={IMG_CON + posterPath} />
    </div>
  );
};

export default MovieCard;
