import { useEffect, useState, useCallback } from "react";
import "./App.css";
import MovieCard from "./component/MovieCard";
import AddMovieForm from "./component/AddMovieForm";

function App() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIdLoading] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovie = useCallback(async () => {
    setIdLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://movie-75fc5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      const data = await response.json();
      console.log(data);
      const allMovies = [];
      for (let key in data) {
        allMovies.push({
          id: key,
          title: data[key].title,
          opening_text: data[key].opening_text,
          release_date: data[key].release_date,
        });
      }
      console.log(allMovies);
      setMoviesList(allMovies);
    } catch (e) {
      setError(e.message);
    }
    setIdLoading(false);
  }, []);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  async function addMovieHandler(movie) {
    const response = await fetch(
      "https://movie-75fc5-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
      }
    );
    const data = await response.json();
    fetchMovie();
  }

  async function onDeleteHandler(id) {
    await fetch(
      `https://movie-75fc5-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`,
      {
        method: "DELETE",
      }
    );
    fetchMovie();
  }

  return (
    <div className="App bg-gray-200 h-screen flex flex-col items-center gap-5">
      <h1 className="text-xl font-bold">Movies List</h1>
      <div className="bg-white p-8 rounded-xl w-1/2">
        <AddMovieForm onAddMovie={addMovieHandler} />
        <button
          onClick={fetchMovie}
          className="bg-blue-600 text-white px-5 py-2 rounded-2xl"
        >
          Load Movies
        </button>
      </div>
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
              <MovieCard
                movie={movie}
                onDelete={() => onDeleteHandler(movie.id)}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
