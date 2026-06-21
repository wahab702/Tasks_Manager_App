import { createSlice } from "@reduxjs/toolkit";
import bcrypt from "bcryptjs";
const userSlice=createSlice({
    name : "user",
    initialState : {
        // users : JSON.parse(localStorage.getItem("users")) || [],
        // currentUser:JSON.parse(localStorage.getItem("currentUser")) 
        users:[],
        currentUser:null,
        isLoggedIn:false

        
    },
    reducers:{
        addUser: (state , action)=>{    
            state.users.push(action.payload)
            // localStorage.setItem("users", JSON.stringify(state.users))
        },
       signInUser:(state,action) => {
        state.currentUser=action.payload
        state.isLoggedIn=true
       
            // localStorage.setItem("loggedInStatus", "true");
            // state.currentUser=action.payload
            // localStorage.setItem("currentUser" , JSON.stringify(state.currentUser))
           
        },
        signOutUser:(state , action)=>{
            state.currentUser=null
            state.isLoggedIn=false
            // localStorage.removeItem("loggedInStatus");
            
        }
        
        

    }
})
export const {addUser , signInUser , signOutUser}=userSlice.actions
export default userSlice.reducer
 