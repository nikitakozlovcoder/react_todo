import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './TasksSlice';


export default configureStore({
    reducer: {
        tasks: tasksReducer
    }
})
