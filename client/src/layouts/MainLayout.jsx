import { Outlet } from "react-router-dom";
import Navbar from "../components/appbar/Navbar";
const MainLayout = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen"><Outlet/></div>
      <h1>---------footer--------</h1>
    </div>
  );
};

export default MainLayout;
