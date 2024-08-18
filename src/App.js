import React, { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=8a4f30c8";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("india");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search || []);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans p-6 md:p-12">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Movie Verse</h1>

        <div className="w-full max-w-lg flex items-center bg-white rounded-full shadow-sm overflow-hidden">
          <input
            className="flex-1 bg-white text-lg px-4 py-2 border border-gray-300 rounded-l-full outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <button
            className="w-12 h-12 flex items-center justify-center bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors rounded-r-full"
            onClick={() => searchMovies(searchTerm)}
          >
            🔍
          </button>
        </div>

        {movies?.length > 0 ? (
          <div className="mt-12 w-full flex justify-center flex-wrap gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="mt-12 flex justify-center">
            <h2 className="text-xl font-medium text-gray-600">No movies found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
