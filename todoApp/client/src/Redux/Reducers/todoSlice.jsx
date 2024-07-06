import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  addTodosAsync,
  deleteTodosAsync,
  deleteAllCompletedTodosAsync,
  toggleTodosAsync,
} from "./services";

const initialState = {
  todos: [],
  prevTodos: [],
  activeFilter: localStorage.getItem("activeFilter") || "all",
  isLoading: false,
  error: null,
  addNewTodoLoading: false,
  addNewTodoerror: null,
};

const reducers = {
  setFilter: (state, action) => {
    state.activeFilter = action.payload;
    const filtered = state.todos.filter((todo) => {
      return state.activeFilter == "all"
        ? true
        : state.activeFilter == "active"
        ? !todo.completed
        : state.activeFilter == "completed"
        ? todo.completed
        : false;
    });
    state.prevTodos = filtered;
  },
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers,
  extraReducers(builder) {
    builder

      //? get todos
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      //? add todo
      .addCase(addTodosAsync.fulfilled, (state, action) => {
        state.addNewTodoLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(addTodosAsync.pending, (state) => {
        state.addNewTodoLoading = true;
      })
      .addCase(addTodosAsync.rejected, (state, action) => {
        state.addNewTodoLoading = false;
        state.addNewTodoerror = action.error.message;
      })

      //? Toggle Todo
      .addCase(toggleTodosAsync.fulfilled, (state, action) => {
        const { id, completed } = action.payload;
        const index = state.todos.findIndex((item) => item.id === id);
        state.todos[index].completed = completed;
      })

      //? delete Todo
      .addCase(deleteTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      })

      //? delete all completeds Todo
      .addCase(deleteAllCompletedTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload;
      });
  },
});

export const selectTodo = (state) => state.todo;

export const { setFilter } = todoReducer.actions;

export default todoReducer.reducer;
