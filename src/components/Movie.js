import React from "react";

const Movie = ({ data }) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
        alt={data.id}
      />
      <h2>{data.title}</h2>
    </div>
  );
};

export default Movie;
