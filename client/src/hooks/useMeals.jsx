import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"

const useMeals = () => {
    const {data:meals=[], isLoading, refetch}= useQuery({
        queryKey: ['meals'],
        queryFn: async()=>{
            const res = await useAxios.get('/meals')
            return res.data;
        }
    })
  return [meals,  isLoading, refetch]
}

export default useMeals