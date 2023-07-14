import React from "react";
import PostInput from "../components/PostInput";
import PostList from "../components/PostList";
import WholeContainer from "../style/WholeContainer";

const Main = () => {
  return (
    <WholeContainer>
      <h2>My Memo</h2>
      <PostInput />
      <PostList />
    </WholeContainer>
  );
};

export default Main;
