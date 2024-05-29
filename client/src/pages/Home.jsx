import MealCard from "../components/cards/MealCard";
import useMeals from "../hooks/useMeals";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const Home = () => {
  const [meals, isLoading] = useMeals();
  if(isLoading){
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
  }
  return (
    <div className="pt-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-2 md:px-8">
      {meals?.map((meal) => (
        <MealCard key={meal.meal_id} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
