import React from "react";
import PageContent from "./../components/PageContent";
import { useRouteError } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const Error = () => {
  const error = useRouteError();

  let title = "An Error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Title not found";
    message = "Could not find resource of page";
  }
  return (
    <>
      <Wrapper />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
