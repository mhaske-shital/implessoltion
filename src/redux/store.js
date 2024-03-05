import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "./authSlice"
const store = configureStore({
    reducer: {
        auth: loginReducer,
    }
})

export default store