import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/todos`);
  return data;
});

export const addTodosAsync = createAsyncThunk(
  "todos/addTodosAync",
  async (todoData) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/todos`,
      todoData
    );
    return data;
  }
);

export const deleteTodosAsync = createAsyncThunk(
  "todos/deleteTodosAsync",
  async (id) => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`
    );
    return data;
  }
);

export const deleteAllCompletedTodosAsync = createAsyncThunk(
  "todos/deleteAllCompletedTodosAsync",
  async () => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_BASE_URL}/todos/completed`
    );
    return data;
  }
);

export const toggleTodosAsync = createAsyncThunk(
  "todos/toggleTodosAync",
  async (id) => {
    const { data } = await axios.patch(
      `${import.meta.env.VITE_BASE_URL}/todos/${id}`
    );
    return data;
  }
);
