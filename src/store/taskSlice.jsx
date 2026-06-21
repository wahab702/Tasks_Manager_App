
import { AddTask } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
const taskSlice=createSlice({
    name : "task" , 
    initialState: {
        tasks : [],
    },
    reducers:{
        addTask:(state , action)=>{
            state.tasks.push(action.payload)
        },
         updateTask(state, action) {
            const { id, text, description, status } = action.payload;
            const task = state.tasks.find((t) => t.id === id);
            if (task) {
                
                task.text = text;
                task.description = description;
                task.status = status;
            }
        },
        deleteTask:(state , action)=>{
            state.tasks=state.tasks.filter((task)=>task.id !== action.payload)
        }
    }
})
export const {addTask , updateTask , deleteTask}=taskSlice.actions
export default taskSlice.reducer