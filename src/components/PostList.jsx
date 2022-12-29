import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { PostItem } from "./PostItem";

export const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Posts not found...</h1>;
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem number={index + 1} post={post} remove={remove} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  );
};
