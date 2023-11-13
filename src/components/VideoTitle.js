import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-20">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4 ">{overview}</p>
      <div className="">
        <button className="bg-gray-500 text-white p-2 px-16 text-lg rounded-md bg-opacity-60 ">
          ▶ Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white p-2 px-16 text-lg rounded-md bg-opacity-60 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
