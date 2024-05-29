import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

const useAllSelectedMeal = () => {

    const {data:selectedMeals=[],refetch,}= useQuery({
        queryKey: ['allSelectedMeals'],
        queryFn: async()=>{
            const res = await useAxios.get(`/selectedMeals`)
            return res.data;
        }
    })
  return [selectedMeals, refetch]
}

export default useAllSelectedMeal;