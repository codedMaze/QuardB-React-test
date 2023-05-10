import React from "react";
import classes from "./MoviesList.module.css";
import { Link } from "react-router-dom";

const MoviesList = ({ movies }) => {
  return (
    <div className={classes.movies}>
      <h1>Movies</h1>
      <ul className={classes.list}>
        {movies.map((movie) => (
          <li key={movie?.show?.id} className={classes.item}>
            <div className={classes.flex}>
              <img src={movie?.show?.image?.original} alt={movie?.show?.name} />
              <div className={classes.content}>
                <h2>{movie?.show?.name}</h2>
                <p>{movie?.show?.language}</p>
                <time>{movie?.show?.premiered}</time>
                <div className={classes.button}>
                  <Link to={`details/${movie?.show?.id}`}>Show Summary</Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
