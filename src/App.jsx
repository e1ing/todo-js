import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { PostForm } from "./components/PostForm";
import { MyModal } from "./components/UI/modal/MyModal";
import { MyButton } from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/postService";
import { Loader } from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

export const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll();
    setPosts(response.data);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

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
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <hq>Error happend $ {postError}</hq>}

      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          title="Posts list for JS"
          posts={sortedAndSearchPosts}
          remove={removePost}
        />
      )}
    </div>
  );
};
