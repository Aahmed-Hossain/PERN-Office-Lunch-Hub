import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"
import moment from 'moment';
const useMeals = () => {
    const {data:meals=[], isLoading, refetch}= useQuery({
        queryKey: ['meals'],
        queryFn: async()=>{
            const res = await useAxios.get('/meals')
            return res.data;
        }
    })

        // Filter meals for the current date
    const currentDate = moment().format('YYYY-MM-DD');
    const todaysMeals = meals.filter(meal => meal.date === currentDate);
  return [todaysMeals, meals, isLoading, refetch]
}

export default useMeals;













