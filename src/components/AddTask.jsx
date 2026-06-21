import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ShowTasks from "./ShowTasks";
import { addTask } from "../store/taskSlice";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user.currentUser);

  const onSubmit = (data) => {
    const { task, description } = data;
    const newTask = {
      id: Date.now(),
      userId: currentUser?.id,
      text: task,
      description,
      status: "Pending",
    };
    dispatch(addTask(newTask));
    alert("Task added successfully!");
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 ">

      {/* Task List */}
      <div className="max-w-4xl mx-auto mb-10">
        <ShowTasks />
      </div>

      {/* Add Task Form */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Task</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">

          <label className="text-gray-700 font-medium">Task Title</label>
          <input
            type="text"
            placeholder="Enter task title"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("task", { required: "Task title is required" })}
          />

          <label className="text-gray-700 font-medium">Description</label>
          <textarea
            placeholder="Enter task description"
            rows={4}
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("description")}
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;