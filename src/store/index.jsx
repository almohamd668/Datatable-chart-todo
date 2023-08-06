import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice";
import chartSlice from './chartSlice'
const store = configureStore({
  reducer: {
    todos: todoReducer,
    chart: chartSlice
  },
});

export default store;
