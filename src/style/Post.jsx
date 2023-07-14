import { styled } from "styled-components";

const Post = styled.div`
  padding: 0px 20px;
  width: 90%;
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
