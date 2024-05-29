import MealCard from "../components/cards/MealCard";
import useMeals from "../hooks/useMeals";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useAuth from "../hooks/useAuth.";
const Home = () => {
  const [todaysMeals, , isLoading] = useMeals();
  const {user} = useAuth();
  const name = user?.name || user?.user_name;

  if(isLoading){
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  }
  return (
   <div  className="pt-[1rem] px-2 md:px-8">
  
 { (user?.role || user?.user_role) === 'admin' ?  
 <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1976D2]"> Hi, ADMIN {name?.toUpperCase()}  <br/> These menus only for Today</h1> 
  : 
  <h1 className="text-center font-extrabold text-4xl mb-6 text-[#1976D2]"> Hi, Welcome!! {name?.toUpperCase()} <br /> Choose Todays Lunch Menu</h1> 
  }

<div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 ">
      {todaysMeals?.map((meal) => (
        <MealCard key={meal.meal_id} meal={meal} />
      ))}
    </div>
   </div>
  );
};

export default Home;
