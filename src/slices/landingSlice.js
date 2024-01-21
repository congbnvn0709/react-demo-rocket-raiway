import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "../services/productService";

const initialState = {
    name: '',
    loading: 'idle',
    lisProduct: [],
    productType: [],
    shippingUnit: [],
    status: [],
    minPrice: '',
    maxPrice: '',
    page: 1,
    totalElements: 0,
    sortType: 'DESC',
    sortField: 'id'
}
const landingSlice = createSlice({
    name: 'landing',
    initialState,
    reducers: {
        searchTextProduct: (state, action) => {
            state.name = action.payload;
        },
        sortProduct: (state, action) => {
            const { sortField, sortType } = action.payload;
            state.sortField = sortField
            state.sortType = sortType;
        },
        filterByListCheck: (state, action) => {
            const { filterBy, value } = action.payload;
            state[filterBy] = value;
        },
        filterByPrice: (state, action) => {
            const { priceName, value } = action.payload;
            state[priceName] = value;
        },
        onPageChange: (state, action) => {
            state.page = action.payload;
        },
        resetFilter: () => {
            return initialState
        }
    },
    extraReducers: builder => {
        builder.addCase(getAllProduct.pending, (state, action) => {
            state.loading = 'loading';
        }).addCase(getAllProduct.fulfilled, (state, action) => {
            state.loading = 'idle';
            // state.lisProduct = action.payload.content;
            // state.totalElements = action.payload.totalElements;
            state.lisProduct = action.payload;
            state.totalElements = action.payload.length;
        })
        // TODO:dựa vào status để phía UI biết được những request đang được request hay thành công
        //  TODO: dựa vào status để thêm icon loading
    }
})
export const { searchTextProduct, sortProduct, filterByListCheck, filterByPrice, onPageChange } = landingSlice.actions;

export const getAllProduct = createAsyncThunk('product/searchProduct', async () => {
    // const { content, totalElements } = await productService.getAllProduct();
    // return { content, totalElements }
    const res = await productService.getAllProduct();
    return res;
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