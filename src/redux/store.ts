import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./feature/counter/counterSlice";
const store = configureStore({
    reducer: {
        habijabi: counterReducer
    },
})

export default store
