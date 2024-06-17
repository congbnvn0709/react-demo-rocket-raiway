const initState = {
    toDoList: [1, 2, 3]
}

const toDoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'toDoList/add': {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ]
            };
        }
        case 'toDoList/remove': {
            return {

            }
        }
        default: {
            return state;
        }
    }
}
export default toDoReducer;