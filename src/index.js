import App from "./App"
import SignIn from "./pages/authentication/SignIn"
import SignUp from "./pages/authentication/SignUp"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import About from "./pages/About" 
import {createBrowserRouter, RouterProvider } from "react-router-dom"
import ReactDom from "react-dom/client"
import ProtectedRoute from "./routes/ProtectedRoute"
import ShowTasks from "./components/ShowTasks"
import AllTasks from "./components/AllTasks"
import EditTask from "./components/EditTask"
import Tasks from "./pages/Tasks"
import AddTask from "./components/AddTask"
import Profile from "./pages/Profile"
import { Provider } from "react-redux"
import appStore from "./store/appStore"
import Dashboard from "./pages/Dashboard"
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";


const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
        index: true,
        element: <ProtectedRoute><Home/></ProtectedRoute>
      },
            {
        path:"/signIn",
        element:<SignIn/>
    },
    {
        path:"/signUp",
        element:<SignUp/>
    },
    
    {
        
        path:"services",
        
          
        element:<ProtectedRoute><Services/></ProtectedRoute>
    },
    {
        path:"contact",
        element:<ProtectedRoute><Contact/></ProtectedRoute>
    },
    {
        path:"about",
        element:<ProtectedRoute><About/></ProtectedRoute>
    },
   
    {
       path:"task",
       element:<ProtectedRoute><Tasks/></ProtectedRoute>
    },
    {
        path:"showtasks",
        element:<ProtectedRoute><ShowTasks/></ProtectedRoute>
     },
     {
        path:"/alltasks",
        element:<ProtectedRoute><AllTasks/></ProtectedRoute>
     },
     {
        path:"/edit/:id",
        element:<ProtectedRoute><EditTask/></ProtectedRoute>
     },
     {
        path:"/addTask",
        element: <ProtectedRoute><AddTask/></ProtectedRoute>
     },
     {
        path:"/profile",
        element: <ProtectedRoute><Profile/></ProtectedRoute>
     },
     {
        path:"/dashboard",
        element: <ProtectedRoute><Dashboard/></ProtectedRoute>
     }
    

                ]
}    
       
])
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<Provider store={appStore}>
    <RouterProvider router={appRouter}/>
</Provider>)