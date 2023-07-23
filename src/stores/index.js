import { configureStore } from "@reduxjs/toolkit";
import listTodoSlice from "../pages/admin/features/TodoList/ListTodo/listTodoSice";
import FilterSlice from "../pages/admin/features/TodoList/Filter/filterSlice";

const store = configureStore({
    reducer: {
        listTodo: listTodoSlice.reducer,
        filters: FilterSlice.reducer

    }
})

export default store;