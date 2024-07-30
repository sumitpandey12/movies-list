import { useState } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIdLoading] = useState(null);

  function fetchMovie() {
    setIdLoading(true);
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformData = data.results.map((movieData) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        });
        setMoviesList(transformData);
        setIdLoading(false);
      });
  }

  return (
    <div className="App bg-gray-200 h-screen flex flex-col items-center gap-5">
      <h1 className="text-xl font-bold">Movies List</h1>
      <button
        onClick={fetchMovie}
        className="bg-blue-600 text-white px-5 py-2 rounded-2xl"
      >
        Load Movies
      </button>
      <div className="bg-white p-8 rounded-xl w-1/2">
        {isLoading == null ? (
          <div>Not Found</div>
        ) : isLoading == true ? (
          <div>Loading...</div>
        ) : (
          moviesList.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
