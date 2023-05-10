import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Wrapper = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Wrapper;
