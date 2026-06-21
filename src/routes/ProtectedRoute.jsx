import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  // const loggedInStatus = localStorage.getItem("loggedInStatus") === "true";
  const isLoggedIn=useSelector(store=>store.user.isLoggedIn)


  if (!isLoggedIn) {
    alert("You must be logged in to access this page.");
    return <Navigate to="/signIn" replace />;
  }

  return children;
};

export default ProtectedRoute;