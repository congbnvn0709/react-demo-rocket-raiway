import { createSelector } from "reselect";

//GET LIST TODO
export const todoList = (state) => state.listTodo;
//GET TEXT SEARCH
export const searchTextSelector = (state) => state.filters.search;
// GET STATUS SEARCH
export const statusSearchSelector = (state) => state.filters.status;
//GET PRIORITY SEARCh
export const prioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
    todoList,
    searchTextSelector,
    statusSearchSelector,
    prioritySelector,
    (todoList, searchText, statusSearch, prioritySearch) => {
        return todoList.filter((todo) => {
            if (statusSearch === "All") {
                return prioritySearch.length
                    ? todo.name.includes(searchText) &&
                    prioritySearch.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (statusSearch === "Completed" ? todo.completed : !todo.completed) &&
                (prioritySearch.length ? prioritySearch.includes(todo.priority) : true)
            );
        });
    }
);
