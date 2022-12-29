import React, { useState, useMemo } from "react";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import { MyModal } from "./components/UI/modal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <hr style={{ margin: "15px 0" }} />
      <PostList
        title="Posts list for JS"
        posts={sortedAndSearchPosts}
        remove={removePost}
      />
    </div>
  );
};
