import SelectedMealCard from "../components/cards/SelectedMealCard";
import useAllSelectedMeal from "../hooks/useAllSelectedMeal";

const SelectedMeal = () => {
  const [selectedMeals, refetch] = useAllSelectedMeal();


  return (
    <div className="flex flex-col gap-4">
      {
        selectedMeals?.map((selectedMeal,idx)=> (
<SelectedMealCard key={idx} selectedMeal={selectedMeal} refetch={refetch}/>
        ))
      }
    </div>
  )
}

export default SelectedMeal