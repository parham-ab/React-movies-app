import React, { useEffect, useState } from "react";
// MUI components
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
// components
import Movie from "./components/Movie";
import Filter from "./components/Filter";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  // Pagination
  const handlePagination = (e, val) => {
    setPageNum(val);
  };

  useEffect(() => {
    const GetMoviesApi = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=2c6635fc36cab418e6c615690f4e11d6&language=en-US&page=${pageNum}`
      );
      const movies = await data.json();
      setMovieData(movies.results);
      setFiltered(movies.results);
    };
    GetMoviesApi();
  }, [pageNum]);

  return (
    <div>
      <Filter
        setFiltered={setFiltered}
        movieData={movieData}
        setMovieData={setMovieData}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="container">
        {movieData &&
          filtered.map((item) => <Movie key={item.id} data={item} />)}
      </div>

      <div className="pagination-container">
        {/* <button onClick={nextHandler}>next</button> */}
        <Stack spacing={2}>
          <Pagination count={500} onChange={handlePagination} />
        </Stack>
      </div>
    </div>
  );
};

export default App;
