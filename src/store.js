import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import tableReducer from './slices/tableSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        table: tableReducer
    }
})

export default store