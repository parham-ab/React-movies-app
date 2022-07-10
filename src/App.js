import React, { useEffect, useState } from "react";
// components
import Movie from "./components/Movie";
import Filter from "./components/Filter";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    const GetMoviesApi = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=2c6635fc36cab418e6c615690f4e11d6`
      );
      const movies = await data.json();
      setMovieData(movies.results);
      setFiltered(movies.results);
    };
    GetMoviesApi();
  }, []);

  return (
    <div>
      <Filter
        setFiltered={setFiltered}
        movieData={movieData}
        setMovieData={setMovieData}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      {movieData && filtered.map((item) => <Movie key={item.id} data={item} />)}
    </div>
  );
};

export default App;
