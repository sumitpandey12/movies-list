import React from "react";

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <div className="bg-blue-900 p-5 my-2 rounded-xl">
      <h1 className="text-2xl font-bold text-white">{movie.title}</h1>
      <span className="text-white">{movie.openingText}</span>
    </div>
  );
};

export default MovieCard;
