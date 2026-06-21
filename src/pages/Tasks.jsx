import AddTask from "../components/AddTask";
import { useSelector } from "react-redux";

const Tasks = () => {
  const tasks = useSelector(store => store.task.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "Completed").length;
  const pendingTasks = tasks.filter(task => task.status !== "Completed").length;

  return (
    <div className="min-h-screen bg-gray-50 p-8 w-full">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Task Dashboard</h1>
        <p className="text-gray-600 mt-1">View and manage all your tasks</p>
      </div>

      {/* Stats */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
        <div className="bg-blue-500 text-white rounded-lg p-5 flex-1 text-center shadow">
          <h2 className="font-semibold">Total Tasks</h2>
          <p className="text-2xl font-bold">{totalTasks}</p>
        </div>
        <div className="bg-yellow-400 text-gray-900 rounded-lg p-5 flex-1 text-center shadow">
          <h2 className="font-semibold">Pending Tasks</h2>
          <p className="text-2xl font-bold">{pendingTasks}</p>
        </div>
        <div className="bg-green-500 text-white rounded-lg p-5 flex-1 text-center shadow">
          <h2 className="font-semibold">Completed Tasks</h2>
          <p className="text-2xl font-bold">{completedTasks}</p>
        </div>
      </div>

      {/* Add Task Panel */}
      <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto w-full">
        
        <AddTask />
      </div>

    </div>
  );
};

export default Tasks;