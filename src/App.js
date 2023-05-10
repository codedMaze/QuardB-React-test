import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Home, { homeLoader } from "./Pages/Home";
import Error from "./Pages/Error";
import MoviesDetail, { moviesDetailLoader } from "./Pages/MoviesDetail";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home />, loader: homeLoader },
        {
          path: "details/:details",
          element: <MoviesDetail />,
          loader: moviesDetailLoader,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
