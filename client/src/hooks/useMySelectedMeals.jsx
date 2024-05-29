import { useQuery } from "@tanstack/react-query"
import { useAxios } from "./useAxios"
import useAuth from './useAuth.';

const useMySelectedMeals = () => {
const {user} = useAuth();
    const {data:mySelectedMeals=[],refetch,}= useQuery({
        queryKey: ['mySelectedMeals'],
        queryFn: async()=>{
            const res = await useAxios.get(`/selectedMeals/${user.email}`)
            return res.data;
        }
    })
  return [mySelectedMeals, refetch]
}

export default useMySelectedMeals;