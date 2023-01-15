import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AppRouter } from "./components/AppRouter";

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};
