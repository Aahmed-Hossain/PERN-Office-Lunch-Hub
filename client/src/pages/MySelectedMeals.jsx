import { Typography } from "@mui/material";
import MySelectedMealsCard from "../components/cards/MySelectedMealsCard";
import useMySelectedMeals from "../hooks/useMySelectedMeals";
import useAuth from "../hooks/useAuth.";

const MySelectedMeals = () => {
  const {user} = useAuth();
  const [mySelectedMeals, refetch] = useMySelectedMeals();
  console.log(mySelectedMeals)
  return (
    <div >
      {
        mySelectedMeals?.length > 0 ? (
          <div className="flex flex-col gap-4">
 {mySelectedMeals?.map((selectedMeal, idx) => (
            <MySelectedMealsCard
              key={idx}
              selectedMeal={selectedMeal}
              refetch={refetch}
            />
          ))}
          </div>
         
        ) :
        (<Typography variant="h5" color="textSecondary" fontWeight={700} align="center">
          Hey Mr. {user?.name?.toUpperCase() || user?.user_name?.toUpperCase()}. You have not selected any meal yet.
        </Typography>)
      }
     
    </div>
  );
};

export default MySelectedMeals;
