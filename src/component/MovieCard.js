import React from "react";

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <div className="flex flex-col bg-blue-900 p-5 my-2 rounded-xl">
      <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
      <span className="text-white">{movie.opening_text}</span>
      <button
        onClick={props.onDelete}
        className="bg-red-900 mt-3 p-1 rounded-2xl text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default MovieCard;
