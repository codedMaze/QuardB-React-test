import MoviesList from "../components/MoviesList";
import { json, useLoaderData } from "react-router-dom";

const Home = () => {
  const posts = useLoaderData();
  return (
    <>
      <MoviesList movies={posts} />
    </>
  );
};

export default Home;

export const homeLoader = async () => {
  const response = await fetch("https://api.tvmaze.com/search/shows?q=all");

  if (!response.ok) {
    throw json({ message: "Could not fetch movies" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData;
  }
};
