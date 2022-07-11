import React, { useEffect, useState } from "react";
// MUI components
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
// components
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import Footer from "./components/common/Footer";
// animation effect
import { motion } from "framer-motion";

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
        filtered={filtered}
        setFiltered={setFiltered}
        movieData={movieData}
        setMovieData={setMovieData}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="container">
        {movieData &&
          filtered.map((item) => <Movie key={item.id} data={item} />)}
      </motion.div>

      <div className="pagination-container">
        <Stack spacing={2}>
          <Pagination count={500} onChange={handlePagination} />
        </Stack>
      </div>
      <Footer />
    </div>
  );
};

export default App;
