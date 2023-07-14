import React, { useEffect, useState } from "react";
import Button from "../style/Button";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/modules/postSlice";
import { getDataFromFS } from "../services/firestore";

const PostInput = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const dispatch = useDispatch();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const docArr = await getDataFromFS();
  //     };
  //     fetchData();
  //   });

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
