import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Create from "../components/create/Create";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
