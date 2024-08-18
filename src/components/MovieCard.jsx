import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="w-72 h-[400px] m-4 relative rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
      <div className="w-full h-full">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} className="h-full w-full object-cover" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-80 backdrop-blur-sm">
        <span className="block text-gray-700 text-sm font-medium">{Type}</span>
        <h3 className="mt-1 text-gray-900 text-lg font-semibold truncate">{Title}</h3>
        <p className="text-gray-500 text-sm">{Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
