import React from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import AddCommentIcon from '@mui/icons-material/AddComment';import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LogoutIcon from "@mui/icons-material/Logout";
const dashboardPaths = [
  {
    title: "Add Meal",
    path: ``,
    icon: FoodBankIcon,
  },
  {
    title: "Accepted Meal",
    path: `/acceptedMeal`,
    icon: RestaurantMenuIcon,
  },
  {
    title: "Added Meals",
    path: `/addedMeals`,
    icon: AddCommentIcon,
  },
];
const DrawerSidebar = ({ handleDrawerClose }) => {
  const location = useLocation();
  const pathName = location.pathname;

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
      <List sx={{ marginTop: "52vh", marginX: "20px" }}>
        <Link to={"/"} className="flex items-center text-blue-500 mb-3">
          
          <HomeWorkIcon />
          <span className="pl-2">Home</span>
        </Link>

        <button className="flex items-center text-blue-500 ">
          <LogoutIcon /> <span className="pl-2">Logout</span>
        </button>
      </List>
    </Box>
  );
};
export default DrawerSidebar;
