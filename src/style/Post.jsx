import { styled } from "styled-components";

const Post = styled.div`
  padding: 5px 20px;
  width: 350px;
  height: 130px;
  margin: 10px 5px;
  border: 1px solid white;

  & h2 {
    font-size: 16px;
  }

  & p {
    font-size: 14px;
    padding-bottom: 10px;
  }
`;

export default Post;
