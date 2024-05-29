import SelectedMealCard from "../components/cards/SelectedMealCard";
import useSelectedMeal from "../hooks/useSelectedMeal"

const SelectedMeal = () => {
  const [selectedMeals, refetch] = useSelectedMeal();


  return (
    <div className="flex flex-col gap-4">
      {
        selectedMeals?.map((selectedMeal)=> (
<SelectedMealCard key={selectedMeal.id} selectedMeal={selectedMeal} refetch={refetch}/>
        ))
      }
    </div>
  )
}

export default SelectedMeal