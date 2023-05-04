import {
    ADD_TODO,
    DELETE_TODO,
    CHECK_TODO,
    EDIT_TODO,
    TOGGLE_EDIT
  } from "../Const/actionTypes";
  export const addTodo = payload => {
    return { type: ADD_TODO, payload };
  };
  export const editTodo = payload => {
    return { type: EDIT_TODO, payload };
  };
  
  // export const editTodo=(id,editedTodo)=>{
  //     return{type:"EDIT_TODO", id:id,editedTodo}
  // }
  
  // action.id action.editTodo
  
  export const deleteTodo = payload => {
    return { type: DELETE_TODO, payload };
  };
  export const checkTodo = payload => {
    return { type: CHECK_TODO, payload };
  };
  export const toggleEdit = payload => {
    return { type: TOGGLE_EDIT, payload };
  };