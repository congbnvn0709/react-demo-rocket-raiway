const initState = {
    toDoList: []
}

const toDoReducer = (state = initState, action) => {
    switch (state.type) {
        case 'toDoList/add': {
            return {
                ...state,
                toDoList: [
                    ...state.toDoList,
                    action.payload
                ]
            };
        }
        default: {
            return state;
        }


    }
}
export default toDoReducer;