import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

const useSelectedMeal = () => {
    const {data:selectedMeals=[],refetch,}= useQuery({
        queryKey: ['selectedMeals'],
        queryFn: async()=>{
            const res = await useAxios.get('/selectedMeals')
            return res.data;
        }
    })
  return [selectedMeals, refetch]
}

export default useSelectedMeal;