import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOutUser } from "../store/userSlice";
import { useEffect } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";

const Sidebar = ({ setLoggedInStatus, setLogin }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const name=useSelector(store => store.user.currentUser)

  const handleButton = () => {
    dispatch(signOutUser())
    setLoggedInStatus(false)
    setLogin(true)

    alert("You have been logged out. Redirecting to sign in page.")

    navigate("/signIn")
    
  }
  
 

  return (

    <aside className="w-64 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 flex flex-col shadow-xl">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          {name?.username}
        </h1>
        <p className="text-xs text-gray-400">Task Manager</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 p-6 text-sm font-medium">

        <Link
          to="/dashboard"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <DashboardIcon fontSize="small" />
          Dashboard
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <PersonIcon fontSize="small" />
          Profile
        </Link>

        <Link
          to="/messages"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <MessageIcon fontSize="small" />
          Messages
        </Link>

        <Link
          to="/settings"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition"
        >
          <SettingsIcon fontSize="small" />
          Settings
        </Link>

        <button
          onClick={handleButton}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition text-left"
        >
          <LogoutIcon fontSize="small" />
          Logout
        </button>

      </nav>

      {/* Footer */}
      <div className="mt-auto p-6 text-xs text-gray-500 border-t border-gray-700">
        Version 1.0.0
      </div>

    </aside>
  )
}

export default Sidebar