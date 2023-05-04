import {
    ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    CHECK_TODO,
    TOGGLE_EDIT
  } from "../Const/actionTypes";
  
  const initState = {
    todoList: [
      // { id: 5, title: "grocery", checked: false, edited: false },
      // { id: 15, title: "homework", checked: false, edited: false }
    ]
  };
  // const todoList=[]
  
  const todoReducer = (state = initState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return { ...state, todoList: [...state.todoList, action.payload] };
      case EDIT_TODO:
        return {
          ...state,
          todoList: state.todoList.map(e =>
            e.id === action.payload.id
              ? { ...e, title: action.payload.newTitle }
              : e
          )
        };
      case DELETE_TODO:
        return {
          ...state,
          todoList: state.todoList.filter(e => e.id !== action.payload)
        };
      case CHECK_TODO:
        return {
          ...state,
          todoList: state.todoList.map(e =>
            e.id === action.payload ? { ...e, checked: !e.checked } : e
          )
        };
      case TOGGLE_EDIT:
        return {
          ...state,
          todoList: state.todoList.map(e =>
            e.id === action.payload ? { ...e, edited: !e.edited } : e
          )
        };
      default:
        return state;
    }
  };
  export default todoReducer;