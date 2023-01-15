import React from "react";
import { Route, Routes, Navigate, useParams } from "react-router-dom";
import { About } from "../pages/About";
import { Posts } from "../pages/Posts";
import { PostIdPage } from "../pages/PostIdPage";
import { Error } from "../pages/Error";
import { Navbar } from "./UI/navbar/Navbar";

export const AppRouter = () => {
  const { id } = useParams();
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Navigate to="posts" replace />}/>
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostIdPage />} />
        <Route path="about" element={<About />} />
        <Route path="error" element={<Error />} />
      </Route>
    </Routes>
  );
};

//<Route path="*" element={<Navigate to="/error" replace />} />
