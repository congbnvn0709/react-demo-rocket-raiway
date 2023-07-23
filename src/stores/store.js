import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "../slices/landingSlice";

const store = configureStore({
    reducer: landingSlice.reducer
})

export default store;