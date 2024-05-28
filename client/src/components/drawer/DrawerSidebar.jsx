/* eslint-disable react/prop-types */

import FoodBankIcon from "@mui/icons-material/FoodBank";
import AddCommentIcon from '@mui/icons-material/AddComment';import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link,useLocation, useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LogoutIcon from "@mui/icons-material/Logout";
import useAuth from "../../hooks/useAuth.";
const adminDashboardPaths  = [
  {
    title: "Add Meal",
    path: ``,
    icon: FoodBankIcon,
  },
  {
    title: "Selected Meal",
    path: `/selectedMeal`,
    icon: RestaurantMenuIcon,
  },
  {
    title: "Added Meals",
    path: `/addedMeals`,
    icon: AddCommentIcon,
  },
];

const userDashboardPaths = [
  {
    title: "My Meals",
    path: `/mySelectedMeals`,
    icon: AddCommentIcon,
  },
];

const DrawerSidebar = ({ handleDrawerClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location.pathname;
  const {user, logoutUser} =  useAuth();
  const userRole = user?.role;
  const dashboardPaths = userRole === "admin" ? adminDashboardPaths : userDashboardPaths;

  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };
  return (
    <Box className="flex flex-col justify-between">
      <List>
        {dashboardPaths.map((item, index) => {
          const linkPath = `/addMeal${item.path}`;
          return (
            <Link onClick={handleDrawerClose} to={linkPath} key={index}>
              <ListItem
                disablePadding
                sx={{
                  ...(pathName === linkPath
                    ? {
                        borderRight: "3px solid #1976D2",
                        "& svg": { color: "#1976D2" },
                        color: "yellowgreen",
                      }
                    : {}),
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon && <item.icon />}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
      <List sx={{ marginTop: "100%", marginX: "20px" }}>
        <Link to={"/"} className="flex items-center text-blue-500 mb-3">
          
          <HomeWorkIcon />
          <span className="pl-2">Home</span>
        </Link>

        <button onClick={handleLogout} className="flex items-center text-blue-500 ">
          <LogoutIcon /> <span className="pl-2">Logout</span>
        </button>
      </List>
    </Box>
  );
};
export default DrawerSidebar;
