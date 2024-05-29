import AddedMealCard from "../components/cards/AddedMealCard";
import useMeals from "../hooks/useMeals";

const AddedMeals = () => {
  const [, meals, , refetch] = useMeals();


  return (
    <div className="flex flex-col gap-4">
      {meals?.map((meal, idx) => (
        <AddedMealCard key={idx} meal={meal} refetch={refetch} />
      ))}
    </div>
  );
};

export default AddedMeals;
