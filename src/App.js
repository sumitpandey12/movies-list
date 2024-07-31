import { useEffect, useState, useCallback } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIdLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = useCallback(async () => {
    setIdLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const transformData = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMoviesList(transformData);
    } catch (e) {
      setError(e.message);
    }
    setIdLoading(false);
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

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
        {isLoading && <div>Loading</div>}
        {!isLoading && moviesList.length == 0 && error == null && (
          <div>No Movie Found</div>
        )}
        {!isLoading && error && <div>{error}</div>}
        {!isLoading &&
          moviesList.length > 0 &&
          error == null &&
          moviesList.map((movie) => (
            <div key={movie.id}>
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
