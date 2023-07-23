// import { Reducer } from "redux";

import { createSlice } from "@reduxjs/toolkit";

const initState = {
    search: '',
    status: 'All',
    priority: []
}

// const FilterReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChanges': {
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         }
//         case 'filters/statusFilterChange': {
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         }
//         case 'filters/priorityFilterChange': {
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         }
//         default:
//             return state
//     }

// }

// export default FilterReducer;

const FilterSlice = createSlice({
    name: 'filters',
    initialState: initState,
    reducers: {
        searchFilterChanges: (state, action) => {
            state.search = action.payload

        },// tự động tạo ra action với type là $name/tên reducer , cho phép vieeste code mutation (hoạt động như immutation) do reduxToolkit cài sẵn library IMMER
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        priorityFilterChange: (state, action) => {
            state.priority = action.payload

        }
    }
})
export default FilterSlice;