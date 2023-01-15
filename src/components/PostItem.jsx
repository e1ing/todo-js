import React from "react";
import "../styles/App.css";
import { MyButton } from "./UI/button/MyButton";
import { useNavigate, Link, Navigate, Router } from "react-router-dom";

export const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <Link to={`/posts/${props.post.id}`} />
        <MyButton onClick={() => navigate(`${props.post.id}`)}>Open</MyButton>
        <Link />
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};
