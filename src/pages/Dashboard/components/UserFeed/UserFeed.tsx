"use client";
import { useGlobalContext } from "@/contexts/UserContext";
import { useUserEmail } from "@/hooks/auth/getUser";
import defaultUser from "@/utils/UserData/defaultUser";
import { Box, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import Post from "../Post/Post";
import PasswordAlert from "@/components/Alert/PasswordAlert";
import { getPostByUserId } from "@/hooks/Posts/PostHooks";

function UserFeed() {
  const { name, email, image } = useGlobalContext();
  //check if user is authenticated, then post them to the db
  const dUser = defaultUser(name, email); //autoinit a user
  //pull from the cache and get a list of the users reco posts.
  const { data: user, isError } = useUserEmail(email, dUser);

  const { data: posts, isError: postErr } = getPostByUserId(user?.id);
  if (isError || postErr) {
    <Box>Display error page</Box>;
  }

  return (
    <Box w="full" h="full">
      <Flex flexDir="column">
        {posts &&
          posts.map((post, index) => {
            return (
              <Post
                key={index}
                name={user?.name}
                image={user?.profileImageUrlHttps ?? image}
                contentText={post.text}
                points={post.points}
                contentImg=""
              ></Post>
            );
          })}
        <p>password {user?.hashedPassword}</p>
      </Flex>
    </Box>
  );
}

export default UserFeed;
