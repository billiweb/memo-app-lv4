import React from "react";
import PostInput from "../components/PostInput";
import PostList from "../components/PostList";
import { styled } from "styled-components";

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

const WholeContainer = styled.div`
  max-width: 800px;
  background-color: #2c2c2c;
  color: white;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 20px;
`;
