import React, { useEffect } from "react";

const Filter = ({ setFiltered, movieData, activeGenre, setActiveGenre }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movieData);
      return;
    }

    const filtered = movieData.filter((item) =>
      item.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre]);

  return (
    <div>
      <button onClick={() => setActiveGenre(0)}>All</button>
      <button onClick={() => setActiveGenre(35)}>Action</button>
      <button onClick={() => setActiveGenre(28)}>Comedy</button>
    </div>
  );
};

export default Filter;
