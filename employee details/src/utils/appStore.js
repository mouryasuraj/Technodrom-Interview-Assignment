import { configureStore } from "@reduxjs/toolkit";
import appReducer from './slices/appSlice'
import employeeReducer from './slices/employeeSlice'

const appStore = configureStore({
    reducer: {
        app: appReducer,
        employee: employeeReducer
    }
})

export default appStore