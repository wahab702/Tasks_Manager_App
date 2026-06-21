
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import { useState , useEffect } from "react";
import Sidebar from "./layout/Sidebar";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import { useSelector } from "react-redux";
const App = () => {
  const [login , setLogin]=useState(true)
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const isLoggedIn=useSelector(store=>store.user.isLoggedIn)
  useEffect(() => {
    setLoggedInStatus(isLoggedIn);
    setLogin(!isLoggedIn)
    
    
  }, []);
  return (
   
    <div className="min-h-screen flex flex-col">
      
      <Header login={login}/>
      <div className="flex ">
        {loggedInStatus && <Sidebar setLoggedInStatus={setLoggedInStatus} setLogin={setLogin}/>}
      <Outlet context={{setLoggedInStatus , setLogin}} />
      </div>
      <Footer />
    </div>
   
  );
};

export default App;