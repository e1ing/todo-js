import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Posts } from "./pages/Posts";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route element={<About />} path="/about" />
      <Route element={<Posts />}  path="/posts"/>
      </Routes>
    </BrowserRouter>
  );
};
