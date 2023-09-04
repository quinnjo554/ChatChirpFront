import { UseQueryResult, useQuery } from "react-query";
import User from "../../models/User";
export function useUserEmail(email:string) : UseQueryResult<User, unknown>{
    return useQuery(['User', email], async () =>{
        const url = new URL(`http://localhost:8088/User/email/${email}`)
        const response = await fetch(url.toString());
        const data = await response.json();
        return data
    })
}

 export async function getUser(email:string | undefined){
 const url = new URL(`http://localhost:8088/User/email/${email}`)
              const response = await fetch(url.toString());
             const user = await response.json();
             return user;
 }