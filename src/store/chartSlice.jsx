import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "chart",
  initialState: [
    { url: "users", count: 10 },
    { url: "posts", count: 100 },
    { url: "comments", count: 500 },
    { url: "todos", count: 200 },
    // users:10
    // urls :{
    //   { url: "users", count: 10 },
    // { url: "posts", count: 100 },
    // { url: "comments", count: 500 },
    // { url: "todos", count: 200 },
    // }
  ],
  reducers: {
    addValue: (state, action) => {
      const { url, count } = action.payload;
      const us = state.find((item) => item.url == url);
      if (us) {
        us.url = url;
        us.count = count;
      }
    },
  },
});

export const { addValue } = chartSlice.actions;
export default chartSlice.reducer;
