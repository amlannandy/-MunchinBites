import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "containers/Home";
import Login from "containers/Login";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Routing;
