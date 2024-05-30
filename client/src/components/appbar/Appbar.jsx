import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../assets/images/site_logo.png'
const Navbar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();
  console.log(user)
  const handleLogout = async () => {
    await logoutUser();
    navigate("/login");
  };
  return (
    <div className=" flex justify-between w-full mx-auto py-2 bg-white px-2 md:px-8 border-b max-w-screen-2xl">
      {/* Logo */}
      <Link className="text-normal md:text-2xl font-bold md:font-extrabold flex items-center" to="/">
      <img className="h-10 w-10 "
        src={logo}
        alt={'item.title'}
      />
        <h1 className="text-normal md:text-2xl font-bold md:font-extrabold hidden md:block" >
       
          Lunch<span className="text-[#1976D2]">Hub</span>
        </h1>
      </Link>

      <div className="flex items-center gap-2">
        {
          user ? 
          <>
  <Button onClick={handleLogout} variant="contained" size="small">
          <LogoutIcon/>Logout
        </Button>
      {
       (user.role || user.user_role) === 'admin' ? 
          <Link to={'/addMeal'}>
          <Button variant="contained" size="small">
            <DashboardCustomizeIcon/>
            Dashboard
          </Button>
          </Link>
 : 
          <Link to={'/addMeal/mySelectedMeals'}>
          <Button variant="contained" size="small">
            <DashboardCustomizeIcon/>
            Dashboard
          </Button>
          </Link>

      } 

        <Avatar alt="Logged in user" src={user?.user_img || user?.image  } className="border border-slate-300" />
          </>
          :
          <>
             <Link to={'/login'}>
        <Button variant="contained" size="small">
          <LoginIcon/>
          Login
        </Button>
        </Link>
          </>
        }
      </div>
    </div>
  );
};

export default Navbar;
