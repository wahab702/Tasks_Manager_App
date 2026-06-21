import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const currentUser = useSelector(store => store.user.currentUser);
  const tasks = useSelector(store => store.task.tasks);
  const userTasks = currentUser ? tasks.filter(task => task.userId === currentUser.id) : [];

  if (!currentUser) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50 m-auto w-full">
        <h1 className="text-gray-500 text-xl">No user is logged in.</h1>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start p-8 md:p-12 gap-6">
          
          {/* Avatar */}
          <div className="shrink-0">
            <FaUserCircle className="text-blue-500 text-32 md:text-40" />
          </div>

          {/* User Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">{currentUser.username}</h2>
            <p className="text-gray-500 mt-1">{currentUser.email}</p>

            {/* Status */}
            <div className="mt-4 inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              {currentUser.isLoggedIn ? "Online" : "Offline"}
            </div>

            {/* Stats / Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg shadow text-center">
                <p className="text-gray-500 text-sm">Total Tasks</p>
                <p className="text-xl font-bold">{userTasks.length}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
                <p className="text-gray-500 text-sm">Pending Tasks</p>
                <p className="text-xl font-bold">
                  {userTasks.filter(task => task.status !== "Completed").length}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow text-center">
                <p className="text-gray-500 text-sm">Completed Tasks</p>
                <p className="text-xl font-bold">
                  {userTasks.filter(task => task.status === "Completed").length}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;