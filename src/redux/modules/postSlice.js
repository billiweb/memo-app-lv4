import { createSlice, nanoid } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";

const initialState = [];

const COLLECTION_NAME = "post";
const COLLECTION = collection(db, COLLECTION_NAME);

// firebase에서 post 가져오기
// useEffect(() => {
//   const fetchData = async () => {
//     const querySnapshot = await getDocs(collection(db, "post"));

//     const initialPost = [];
//     querySnapshot.forEach((doc) => {
//       const data = {
//         id: doc.id,
//         ...doc.data(),
//       };
//       initialPost.push(data);
//     });
//     setPost(initialPost);
//   };
//   fetchData();
// });

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        id: nanoid(),
        title: action.payload.title,
        content: action.payload.content,
      });
    },

    deletePost: (state, action) => {
      return state.filter((board) => board.id !== action.payload);
    },

    switchPost: (state, action) => {
      const targetTodoId = action.payload;
      const targetTodo = state.todos.find((todo) => todo.id === targetTodoId);
      targetTodo.isDone = !targetTodo.isDone;
    },
  },
});

export const { setPost, addPost, deletePost, switchPost } = postSlice.actions;
export default postSlice.reducer;
