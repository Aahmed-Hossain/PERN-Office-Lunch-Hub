/* eslint-disable react/prop-types */
import FoodBankIcon from "@mui/icons-material/FoodBank";
import AddCommentIcon from '@mui/icons-material/AddComment';import {
  Box,
  Button,
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
  const userRole = (user?.role || user?.user_role);
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
      <Link to={"/"} style={{ textDecoration: 'none' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'yellowgreen',
            mb: 3,
            transition: 'transform 0.3s',
            '&:hover span': {
              transform: 'translateX(10px)',
            },
          }}
        >
          <HomeWorkIcon color='primary' />
          <Box component="span" sx={{ pl: 2 }}>
            HOME
          </Box>
        </Box>
      </Link>

      <Button
        onClick={handleLogout}
        sx={{
          display: 'flex',
          alignItems: 'center',
          color: 'yellowgreen',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          transition: 'transform 0.3s',
          '&:hover span': {
            transform: 'translateX(5px)',
          },
        }}
      >
        <LogoutIcon  color='primary'  />
        <Box component="span" sx={{ pl: 2 }}>
          Logout
        </Box>
      </Button>
    </List>
    </Box>
  );
};
export default DrawerSidebar;
