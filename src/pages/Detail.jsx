import React from "react";
import { useLocation } from "react-router-dom";
import Post from "../style/Post";
import WholeContainer from "../style/WholeContainer";

const Detail = () => {
  const location = useLocation();
  const post = location.state.post;

  console.log(">>>", post);

  return (
    <WholeContainer>
      <h2>Detail</h2>
      <Post>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </Post>
    </WholeContainer>
  );
};

export default Detail;
