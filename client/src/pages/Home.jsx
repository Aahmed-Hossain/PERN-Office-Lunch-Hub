import { meals } from "../../public/data";
import MealCard from "../components/MealCard";

const Home = () => {
  return (
    <div className="pt-[1rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 px-8">
      {meals?.map((meal) => (
        <MealCard key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default Home;
