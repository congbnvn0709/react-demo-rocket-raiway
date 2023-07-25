import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productService";
const initialState = {
    search: '',
    status: 'idle',
    lisProduct: [],
    listCategories: [],
    listDelivery: [],
    lisStatus: [],
    minPrice: '',
    maxPrice: ''
}
const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        searchProduct: (state, action) => {
            state.lisProduct = state.lisProduct.filter(item => item.name === action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(searchProduct.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(searchProduct.fulfilled, (state, action) => {
            state.lisProduct = action.payload;
            state.status = 'idle';
        })
        // TODO:dựa vào status để phía UI biết được những request đang được request hay thành công
        //  TODO: dựa vào status để thêm icon loading
    }
})

export const searchProduct = createAsyncThunk('product/searchProduct', async (value) => {
    const body = {
        name: value,
        page: 1,
        size: 5,
        sortField: 'id',
        sortType: 'DESC'
    }
    const { content, totalElements } = await productService.searchProduct(body);
    // console.log(res);
})

/**
 * Mỗi 1 createAsyncThunk sẽ tạo ra 3 actions tương ứng
 * product/searchProduct/pending
 * product/searchProduct/fulfilled
 * product/searchProduct/rejected

 * 
 */

/*thunk function (action) (middleWare) nhận vào 2 tham số dispacth để bắn đi 1 action và tham số thứ 2 là getState
    getState: lấy ra toàn bộ state trong store

 : thunk action creator là 1 function => (return thunk action)
*/
// export function searchProduct(texSearch) {
//     return function searchProductThunk(dispacth, getState) {
//         console.log(texSearch);
//         console.log('searchThunk', getState());
//     }
// }
export default landingSlice;