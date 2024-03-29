import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'
// import { counterSlice } from './../features/counter/counterSlice';
import { postReducer } from '../features/posts/postsSlice'


export const store = configureStore({
    reducer: {
        posts: postReducer
    }
})