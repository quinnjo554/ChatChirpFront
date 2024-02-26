import { PostRequest } from "@/models/PostRequest";
import { User } from "next-auth";
import { UseQueryResult, useMutation, useQuery } from "react-query";

 export function getPostByUserId(id: string | undefined): UseQueryResult<Post[], unknown> {
  return useQuery(['Post', id], async () => {
    const response = await fetch(`http://localhost:8088/Post/user/${id}`);
    const post = await response.json();
    return post;
  }, {
    enabled: !!id, // The query will not run until `id` is defined
  });
}

export const createPost = async (post: PostRequest) => {
  const res = await fetch('http://localhost:8088/Post/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return await res.json();
};

export const deletePost = async (postId:string) =>{
  const res = await fetch(`http://localhost:8088/Post/delete/${postId}`,{
    method: 'DELETE'
  });
  //try and throw the error produced from here.
  if(!res.ok){
    throw new Error('Delete Failed');
  }
  return await res.json();

}
