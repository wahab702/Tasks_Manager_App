import Sidebar from "../layout/Sidebar";
import Body from "../layout/Body";
import { Button } from "@mui/material";

const Home = () => {
  const isLoggedIn = localStorage.getItem("loggedInStatus")
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <Body/>
      
    </div>
  );
};

export default Home;