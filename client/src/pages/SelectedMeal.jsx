import SelectedMealCard from "../components/cards/SelectedMealCard";
import useSelectedMeal from "../hooks/useSelectedMeal"

const SelectedMeal = () => {
  const [selectedMeals] = useSelectedMeal();
  console.log(selectedMeals);


  return (
    <div className="flex flex-col gap-4">
      {
        selectedMeals?.map((selectedMeal)=> (
<SelectedMealCard key={selectedMeal.id} selectedMeal={selectedMeal}/>
        ))
      }
    </div>
  )
}

export default SelectedMeal