import MealCard from "../components/cards/MealCard";
import useMeals from "../hooks/useMeals";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Container, Grid, Box, Button } from '@mui/material';
import useAuth from "../hooks/useAuth.";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const [todaysMeals, , isLoading] = useMeals();
  const { user } = useAuth();
  const name = user?.name || user?.user_name;
  const isAdmin = (user?.role || user?.user_role) === "admin";
  const noMealsMessage = isAdmin 
    ? "Hey admin, you didn't add any lunch options for today."
    : "No lunch options available now, please visit later.";

  if (isLoading) {
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>;
  }
  return (

    <Container sx={{ pt: 4 }}>
    <Typography 
      variant="h3" 
      align="center" 
      color="primary" 
      gutterBottom 
      sx={{ fontWeight: '', mb: 5 }}
    >
      Hi, {isAdmin ? `Admin ${name?.toUpperCase()}` : `Welcome!! ${name?.toUpperCase()}`}
      <br />
      {isAdmin ? 'These menus only for Today' : 'Choose Today\'s Lunch Menu'}
    </Typography>
    {todaysMeals?.length > 0 ? (
      <Grid container spacing={4}>
        {todaysMeals?.map((meal) => (
          <Grid item xs={12} sm={6} md={4} key={meal.meal_id}>
            <MealCard meal={meal} />
          </Grid>
        ))}
      </Grid>
    ) : (
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        height="50vh"
      >
        <Typography  variant="h5" color="textSecondary" align="center">
          {noMealsMessage}
        </Typography>
        {isAdmin && (
          <Button

            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }} 
            onClick={() => {
              navigate('/addMeal')
            }}
          >
            Add Meal
          </Button>
        )}
      </Box>
    )}
  </Container>









    // <div className="pt-[1rem] px-2 md:px-8">
    //   {(user?.role || user?.user_role) === "admin" ? (
    //     <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1976D2]">
    //       Hi, ADMIN {name?.toUpperCase()} <br /> These menus only for Today
    //     </h1>
    //   ) : (
    //     <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1976D2]">
    //       Hi, Welcome!! {name?.toUpperCase()} <br /> Choose Todays Lunch Menu
    //     </h1>
    //   )}

    //   <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
    //     {todaysMeals?.map((meal) => (
    //       <MealCard key={meal.meal_id} meal={meal} />
    //     ))}
    //   </div>
    // </div>
  );
};

export default Home;
