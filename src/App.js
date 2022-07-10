import React, { useEffect, useState } from "react";
// components
import Movie from "./components/Movie";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const GetMoviesApi = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=2c6635fc36cab418e6c615690f4e11d6`
      );
      const movies = await data.json();
      setMovieData(movies.results);
    };
    GetMoviesApi();
  }, []);

  return (
    <div>
      {movieData &&
        movieData.map((item) => <Movie key={item.id} data={item} />)}
    </div>
  );
};

export default App;
