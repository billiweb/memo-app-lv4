import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(),
    title: "제목 3",
    content: "내용 3",
  },
  {
    id: nanoid(),
    title: "제목 2",
    content: "내용 2",
  },
];

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
