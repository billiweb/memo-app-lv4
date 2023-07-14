import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../style/Post";
import Button from "../style/Button";
import { deletePost } from "../redux/modules/postSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";

const PostList = () => {
  const dispatch = useDispatch();

  const postList = useSelector(function (state) {
    return state.postSlice;
  });

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    };
    fetchData();
  });

  return (
    <div>
      {postList.map((post) => {
        return (
          <Post key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Button>수정</Button>
            <Button
              onClick={() => {
                if (window.confirm("삭제하시겠습니까?")) {
                  dispatch(deletePost(post.id));
                } else {
                  return false;
                }
              }}
            >
              삭제
            </Button>
          </Post>
        );
      })}
    </div>
  );
};

export default PostList;
