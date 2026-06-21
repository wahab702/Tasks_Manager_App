import { useSelector } from "react-redux"

const Dashboard = () => {

  const tasks = useSelector(store => store.task.tasks)

  const totalTasks = tasks.length
  const completedTasks = tasks.filter(task => task.status === "Completed").length
  const pendingTasks = tasks.filter(task => task.status !== "Completed").length

  if(totalTasks === 0){
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold text-gray-600">
        🎉 No Tasks Yet — Add your first task!
      </h1>
    )
  }

  return (

    <div className="min-h-screen bg-gray-50 py-16 w-full" >

      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Dashboard
      </h1>

      <div className="flex flex-wrap justify-center gap-10">

        
        <div className="bg-gradient-to-r from-blue-300 to-blue-400 text-white p-8 rounded-2xl shadow-xl w-72 text-center hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold opacity-90">
            Total Tasks
          </h2>
          <p className="text-5xl font-bold mt-4">
            {totalTasks}
          </p>
        </div>

        
        <div className="bg-gradient-to-r from-yellow-300 to-orange-400 text-white p-8 rounded-2xl shadow-xl w-72 text-center hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold opacity-90">
            Pending Tasks
          </h2>
          <p className="text-5xl font-bold mt-4">
            {pendingTasks}
          </p>
        </div>

        
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-8 rounded-2xl shadow-xl w-72 text-center hover:scale-105 transition duration-300">
          <h2 className="text-lg font-semibold opacity-90">
            Completed Tasks
          </h2>
          <p className="text-5xl font-bold mt-4">
            {completedTasks}
          </p>
        </div>

      </div>

    </div>

  )
}

export default Dashboard