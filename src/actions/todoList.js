const addTodoList = (payload) => {
    return {
        type: 'toDoList/add',
        payload: payload
    }
}

export { addTodoList }