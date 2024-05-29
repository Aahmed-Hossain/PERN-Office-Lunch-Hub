import MySelectedMealsCard from "../components/cards/MySelectedMealsCard";
import useMySelectedMeals from "../hooks/useMySelectedMeals";

const MySelectedMeals = () => {
  const [mySelectedMeals, refetch] = useMySelectedMeals();
  console.log(mySelectedMeals)
  return (
    <div className="flex flex-col gap-4">
      {mySelectedMeals?.map((selectedMeal, idx) => (
        <MySelectedMealsCard
          key={idx}
          selectedMeal={selectedMeal}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default MySelectedMeals;
