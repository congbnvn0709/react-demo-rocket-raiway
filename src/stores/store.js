import { configureStore } from "@reduxjs/toolkit";
import landingSlice from "../slices/landingSlice";

const store = configureStore({
    reducer: {
        landingPage: landingSlice.reducer
    }
})

export default store;