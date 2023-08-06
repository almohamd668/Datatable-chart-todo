import { createSlice } from "@reduxjs/toolkit";


const getLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if (todos) {
    return (todos = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
};

 const todoSlice = createSlice({
    name: "todos",
    initialState: getLocalStorage(),
    reducers: {
      addTodo: (state, action) => {
         state.push(action.payload)
      },
      updateTodo: (state,action) => {
       const {id,name,desc} = action.payload;
       const ut = state.find(todo => todo.id == id );
       if(ut) {
         ut.name = name;
         ut.desc = desc;
       }
      },
      deleteTodo: (state,action ) => {
         const {id} = action.payload;
         const dt = state.find(todo => todo.id == id );
         if(dt) {
           return state.filter(f => f.id !== id) 
         }
      }
    }
 })

 export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions;
 export default todoSlice.reducer;