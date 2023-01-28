import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/postService";
import { useFetching } from "../hooks/useFetching";
import { Loader } from "../components/UI/loader/Loader";

export const PostIdPage = () => {
  const { id } = useParams();
  console.log("params", id)
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getByID(id);
    setPost(response.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsbyPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(id);
    fetchComments(id);
  }, []);

  return (
    <div>
      <h1>Post page is opened. ID= {post.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {" "}
          {post.id}. {post.title}{" "}
        </div>
      )}
      <h1>Comments</h1>
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((com) => (
            <div style={{ marginTop: "15px" }}>
              <h5>{com.email}</h5>
              <div>{com.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
