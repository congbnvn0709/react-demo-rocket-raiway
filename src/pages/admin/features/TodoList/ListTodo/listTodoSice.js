import { createSlice } from "@reduxjs/toolkit";
import { LIST_TODO } from "../../../../../core/constants/data";

const initState = LIST_TODO;

const listTodoSlice = createSlice({
    name: 'listTodo',
    initialState: initState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            console.log(currentTodo);
            currentTodo.completed = !currentTodo.completed
        }
    }
})
export const { addTodo, toggleTodoStatus } = listTodoSlice.actions;
export default listTodoSlice;

// const ListTodoReducer = (state, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleTodoStatus': {
//             return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo)
//         }
//         default:
//             return state
//     }

// }