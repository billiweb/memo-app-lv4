import React from "react";
import { useLocation } from "react-router-dom";
import Post from "../style/Post";

const Detail = () => {
  const location = useLocation();
  const post = location.state.post;

  console.log(">>>", post);

  return (
    <Post>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </Post>
  );
};

export default Detail;
