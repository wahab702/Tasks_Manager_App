import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const ShowTasks = () => {
    const navigate=useNavigate()
    // const selector=useSelector((store)=>store.task.tasks)
    
    const handlebutton=()=>{
       
       
        
        navigate("/alltasks")
        
    }
    
    return (
        <div>
        <div>
            <Button className="m-4"  variant="contained" color="primary" onClick={handlebutton}> Show Tasks</Button>
        </div>
        
    </div>
    )
}
export default ShowTasks;