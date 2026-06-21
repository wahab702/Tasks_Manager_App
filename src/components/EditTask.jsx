import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTask } from "../store/taskSlice";
const EditTask = () => {
  const selector=useSelector((store)=>store.task.tasks)
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch=useDispatch()
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");

 
  useEffect(() => {
    // const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const taskToEdit = selector.find((task) => task.id == id);
    if (taskToEdit) {
      setText(taskToEdit.text);
      setDescription(taskToEdit.description);
      setStatus(taskToEdit.status || "Pending"); 
    }
  }, [id]);

  const handleEdit = (e) => {
    e.preventDefault(); 

    // const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // const updatedTasks = selector.map((task) => {
    //   if (task.id == id) {
    //     return { id: Number(id), text, description, status }; 
    //   }
    //   return task;
      
    // });
    
    

    // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    dispatch(updateTask(({id:Number(id) , text , description , status})))

    alert("Task updated successfully!");
    navigate("/alltasks");
  };

  return (
    <div className="my-10">
      <form
        onSubmit={handleEdit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Edit Task
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Task</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

       
        <div className="mb-6">
          <input
            type="checkbox"
            checked={status === "Completed"}
            onChange={(e) =>
              setStatus(e.target.checked ? "Completed" : "Pending")
            }
          />
          <span className="ml-2">Completed</span>
        </div>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditTask;