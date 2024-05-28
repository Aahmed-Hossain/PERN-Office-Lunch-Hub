import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

const useMeals = () => {
    const {data:meals=[], isLoading}= useQuery({
        queryKey: ['meals'],
        queryFn: async()=>{
            const res = await useAxios.get('/meals')
            return res.data;
        }
    })
  return [meals, isLoading]
}

export default useMeals