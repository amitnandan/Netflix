import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in Tmdb
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "Don&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //api call and get movies result.

    const qptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me name of 5 movies , comma separated like the example result ahead. Example Result: Gadar, Sholay, Main Hoon Na, Don, Golmaal";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: qptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (gptResult.choices) {
      //TODO : Error handling
      return;
    }

    console.log(gptResult.choices?.[0]?.message?.content);

    const gptMovies = gptResult.choices?.[0]?.message?.content.split(",");

    const promiseArrayData = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[promises* length of array]

    const tmdbResults = await Promise.all(promiseArrayData);
    console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className=" pt-[8%] flex justify-center">
      <form
        className=" w-1/2  bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
