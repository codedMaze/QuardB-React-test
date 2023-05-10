import React from "react";
import classes from "./MovieItem.module.css";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie, openHandler }) => {
  const navigate = useNavigate();
  const showHandler = () => {
    openHandler(true);
  };
  return (
    <article className={classes.movie}>
      <img src={movie?.show?.image?.original} alt={movie?.show?.name} />
      <h1>{movie?.show?.name}</h1>
      <time>{movie?.show?.premiered}</time>
      <p>{movie?.show?.language}</p>
      <p>
        Genres:{" "}
        {movie?.show?.genres.map((gen) => (
          <span key={gen}>{gen} </span>
        ))}
      </p>
      {movie?.show?.summary}

      <menu className={classes.actions}>
        <button onClick={showHandler}>Book Movie Ticket</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </menu>
    </article>
  );
};

export default MovieItem;
