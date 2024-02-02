import { User } from "next-auth";
import { UseQueryResult, useQuery } from "react-query";

 export function getPostByUserId(email:string | undefined): UseQueryResult<User, unknown>{
    return useQuery(['User',email], async ()=>{
             const response = await fetch(`http://localhost:8088/User/email/${email}`);
             const user = await response.json();
             return user;
    })
}