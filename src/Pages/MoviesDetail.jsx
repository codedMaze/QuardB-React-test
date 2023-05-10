import React, { useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import MovieItem from "../components/MovieItem";
import ModalForm from "../components/ModalForm";

const MoviesDetail = () => {
  const movie = useLoaderData();
  const [isopen, setIsOpen] = useState(false);
  return (
    <div>
      {isopen && <ModalForm movie={movie[0]} show={isopen} set={setIsOpen} />}
      <MovieItem
        movie={movie[0]}
        key={movie[0].show.id}
        openHandler={setIsOpen}
      />
    </div>
  );
};

export default MoviesDetail;

export const moviesDetailLoader = async ({ params }) => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
  if (!response.ok) {
    throw json({ message: "Could not fetch movie" }, { status: 500 });
  } else {
    const resData = await response.json();
    const filtered = resData.filter((item) => item.show.id === +params.details);
    return filtered;
  }
};
