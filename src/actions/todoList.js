const addTodoList = (payload) => {
    return {
        type: 'toDoList/add',
        payload: payload
    }
}

const removeItem = (payload) => {
    return {
        type: 'toDoList/remove',
        payload: payload
    }
}

export { addTodoList, removeItem }