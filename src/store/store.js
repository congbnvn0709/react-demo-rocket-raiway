import toDoReducer from "../reducer/todoReducer";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        todo: toDoReducer,
    }
})

export default store;

