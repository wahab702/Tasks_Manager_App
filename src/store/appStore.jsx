import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import taskSlice from "./taskSlice"


const appReducer = {
    user: userSlice,
    task: taskSlice
}


const rootReducer = (state, action) => {

    if (action.type === "user/signOutUser") {
        state = undefined   
    }

    return {
        user: appReducer.user(state?.user, action),
        task: appReducer.task(state?.task, action)
    }
}

const appStore = configureStore({
    reducer: rootReducer
})

export default appStore