import { createSlice } from '@reduxjs/toolkit'
import {nanoid} from "nanoid";
const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action){
            //state.push(...action.payload);
            let map = new Map();
            action.payload.push(...state);
            action.payload.forEach((el)=>{
                map.set(el.id, el);
            });
            return [...map.values()];
        },
        addTask(state, action){
            state.push({...action.payload, id: nanoid()});
        },

        deleteTask(state, action){
            return state.filter(el => el.id !== action.payload.id);
        }
    }
});

export const { setTasks, addTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
