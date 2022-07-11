import React, { useEffect } from "react";

const Filter = ({
  filtered,
  setFiltered,
  movieData,
  activeGenre,
  setActiveGenre,
}) => {
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
    <div className="filter">
      <button
        className={`${activeGenre === 0 && "active"}`}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 28 && "active"}`}
          onClick={() => setActiveGenre(28)}
        >
          Action
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 35 && "active"}`}
          onClick={() => setActiveGenre(35)}
        >
          Comedy
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 12 && "active"}`}
          onClick={() => setActiveGenre(12)}
        >
          Adventure
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 16 && "active"}`}
          onClick={() => setActiveGenre(16)}
        >
          Animation
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 80 && "active"}`}
          onClick={() => setActiveGenre(80)}
        >
          Crime
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 99 && "active"}`}
          onClick={() => setActiveGenre(99)}
        >
          Documentary
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 18 && "active"}`}
          onClick={() => setActiveGenre(18)}
        >
          Drama
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 10571 && "active"}`}
          onClick={() => setActiveGenre(10571)}
        >
          Family
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 14 && "active"}`}
          onClick={() => setActiveGenre(14)}
        >
          Fantasy
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 36 && "active"}`}
          onClick={() => setActiveGenre(36)}
        >
          History
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 27 && "active"}`}
          onClick={() => setActiveGenre(27)}
        >
          Horror
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 10402 && "active"}`}
          onClick={() => setActiveGenre(10402)}
        >
          Music
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 9648 && "active"}`}
          onClick={() => setActiveGenre(9648)}
        >
          Mystery
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 10749 && "active"}`}
          onClick={() => setActiveGenre(10749)}
        >
          Romance
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 878 && "active"}`}
          onClick={() => setActiveGenre(878)}
        >
          Science Fiction
        </button>
      )}
      {/* --- */}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 10770 && "active"}`}
          onClick={() => setActiveGenre(10770)}
        >
          TV Movie
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 53 && "active"}`}
          onClick={() => setActiveGenre(53)}
        >
          Thriller
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 10752 && "active"}`}
          onClick={() => setActiveGenre(10752)}
        >
          War
        </button>
      )}
      {!filtered.length == 0 && (
        <button
          className={`${activeGenre === 37 && "active"}`}
          onClick={() => setActiveGenre(37)}
        >
          Western
        </button>
      )}
    </div>
  );
};

export default Filter;
