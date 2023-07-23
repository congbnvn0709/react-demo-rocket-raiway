import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    search: '',
    lisProduct: []
}
const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.lisProduct = state.lisProduct.filter(item => item.name === action.payload);
        }
    }
})
/*thunk function (action) (middleWare) nhận vào 2 tham số dispacth để bắn đi 1 action và tham số thứ 2 là getState
    getState: lấy ra toàn bộ state trong store

 : thunk action creator là 1 function => (return thunk action)
*/
export function searchProduct(texSearch) {
    return function searchProductThunk(dispacth, getState) {
        console.log(texSearch)
    }
}
export default landingSlice;