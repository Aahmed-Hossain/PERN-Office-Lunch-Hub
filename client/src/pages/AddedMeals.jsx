import AddedMealCard from "../components/cards/AddedMealCard"
import useMeals from "../hooks/useMeals";

const AddedMeals = () => {
  const [meals, refetch] = useMeals();
  console.log(meals)

  return (
    <div className="flex flex-col gap-4">
      {
        meals?.map((meal)=> ( 
<AddedMealCard key={meal.id} meal={meal} refetch={refetch}/>
        ))
      }
    </div>
  )
}

export default AddedMeals