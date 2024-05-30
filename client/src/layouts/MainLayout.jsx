import { Outlet } from "react-router-dom";
import Appbar from "../components/appbar/Appbar";
import Footer from "../components/footer/Footer";
const MainLayout = () => {
  return (
    <div>
      <Appbar/>
      <div className="min-h-screen"><Outlet/></div>
    <Footer/>
    </div>
  );
};

export default MainLayout;
