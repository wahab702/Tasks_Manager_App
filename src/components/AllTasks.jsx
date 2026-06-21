import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from "react";
import { Select , MenuItem, Button  } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../store/taskSlice";
import AddTask from "./AddTask";


const AllTasks = () => {
  const currentUser = useSelector(store => store.user.currentUser);
  const selector = useSelector(store => store.task.tasks);
  const tasks = currentUser
    ? selector.filter(task => task.userId === currentUser.id)
    : selector;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [filterTask , setFilter] = useState("all")
  const [searchedTask , setSearchedTask] = useState("")
  const handleButton=()=>{
    navigate("/addTask")
  }
  

  
  // useEffect(() => {
  //   const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //   setTasks(storedTasks);
  // }, []);
  const handleDelete=(id)=>{
    // const updatedTask=tasks.filter((task)=>task.id !== id)
    dispatch(deleteTask(id))
    // setTasks(updatedTask)
    // localStorage.setItem("tasks", JSON.stringify(updatedTask))
  }
  if(tasks.length === 0){
    return <h1 className="m-auto">Please add tasks...</h1>
  }

  return (
    <div>
      <div className="flex">
      <div className="p-2 m-5 w-50 ">
        <Button className="m-4"  variant="contained" color="primary" onClick={handleButton}> Add Tasks</Button>
      </div>
      <div>
          <input
                  type="text"
                  placeholder="Search tasks..."
                  value={searchedTask}
                  onChange={(e) => setSearchedTask(e.target.value)}
                  className="border my-6 rounded-lg p-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-black transition"/>
         
      </div>
      </div>
     
        
       <div className=" mx-170 my-10 py-2 ">
                <Select value={filterTask} onChange={(e)=>setFilter(e.target.value)} > 

                    <MenuItem  value="all">All</MenuItem >
                    <MenuItem  value="completed">Completed</MenuItem >
                    <MenuItem  value="pending">Pending</MenuItem >
                </Select>
            </div>
          
           
                
               
            
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {tasks
        .filter((task)=>{
          if(searchedTask !== "") return task.text.toLowerCase().includes(searchedTask.toLowerCase())
          if (filterTask === "all") {
            return true
          }
          if (filterTask === "completed"){
            return task.status==="Completed"
          }
          if (filterTask === "pending"){
            return task.status !== "Completed"
          }
          
})
      
        .map((task) => (
          <div
          
            key={task.id}
            className="border border-gray-300 rounded-lg shadow-md p-4 w-80 my-2 bg-white"
          >
            
            
            <h2 className="text-center text-xl font-bold text-gray-800 mb-2">
              {task.text}
            </h2>

            <h5 className="text-gray-600 text-sm">
              {task.description}
            </h5>

            
            <p className="mt-2 font-semibold">
              Status: {task.status || "Pending"}
            </p>

            <div className="mt-4 flex justify-end">
              <EditIcon
                className="cursor-pointer"
                onClick={() => navigate("/edit/" + task.id)}
              />
            </div>
            <DeleteIcon
             className="cursor-pointer text--500"
             onClick={() => handleDelete(task.id)}
            />
          </div>

        )
        )}
      </div>
    </div>
  );
};

export default AllTasks;