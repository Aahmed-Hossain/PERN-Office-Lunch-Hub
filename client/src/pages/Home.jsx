import MealCard from "../components/mealCard/MealCard";
import useMeals from "../hooks/useMeals";


const Home = () => {
  const [meals, isLoading] = useMeals();
  if(isLoading){
    <p>Loading.....</p>
  }
  return (
    <div className="pt-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-8">
      {meals?.map((meal) => (
        <MealCard key={meal.meal_id} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
