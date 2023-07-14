import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../style/Post";
import Button from "../style/Button";
import { deletePost, setPost } from "../redux/modules/postSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState();

  // const postList = useSelector(function (state) {
  //   return state.postSlice;
  // });

  // firebase에서 post 가져오기
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "post"));

      const initialPost = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data(),
        };
        initialPost.push(data);
        // console.log(doc.id);
        // console.log(JSON.stringify(doc.data()));
      });

      setPost(initialPost);
    };
    fetchData();
  });

  return (
    <div>
      {post?.map((post) => {
        return (
          <Post key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Button
              onClick={() => {
                navigate(`/${post.id}`, {
                  state: {
                    post: post,
                  },
                });
              }}
            >
              수정
            </Button>
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
