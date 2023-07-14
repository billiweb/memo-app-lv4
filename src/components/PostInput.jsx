import React, { useEffect, useState } from "react";
import Button from "../style/Button";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/modules/postSlice";

const PostInput = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const dispatch = useDispatch();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(
          addPost({
            title,
            content,
          })
        );
      }}
    >
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button>작성하기</Button>
    </form>
  );
};

export default PostInput;
