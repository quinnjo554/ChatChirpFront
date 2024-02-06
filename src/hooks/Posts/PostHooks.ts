import { User } from "next-auth";
import { UseQueryResult, useQuery } from "react-query";

 export function getPostByUserId(id: string | undefined): UseQueryResult<Post[], unknown> {
  return useQuery(['Post', id], async () => {
    const response = await fetch(`http://localhost:8088/Post/user/${id}`);
    const post = await response.json();
    return post;
  }, {
    enabled: !!id, // The query will not run until `id` is defined
  });
}