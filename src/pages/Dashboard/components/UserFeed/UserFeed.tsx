"use client";
import { useGlobalContext } from "@/contexts/UserContext";
import { useUserEmail } from "@/hooks/auth/getUser";
import defaultUser from "@/utils/UserData/defaultUser";
import { Box, Flex, Grid } from "@chakra-ui/react";
import React, { useRef } from "react";
import Post from "../Post/Post";
import PasswordAlert from "@/components/Alert/PasswordAlert";
import { getPostByUserId } from "@/hooks/Posts/PostHooks";
import Banner from "./Banner";

function UserFeed() {
  const { name, email, image } = useGlobalContext();
  //check if user is authenticated, then post them to the db
  const dUser = defaultUser(name, email); //autoinit a user
  //pull from the cache and get a list of the users reco posts.
  const { data: user, isError } = useUserEmail(email, dUser);
  const { data: posts, isError: postErr, refetch } = getPostByUserId(user?.id);

  const handlePostCreated = () => {
    refetch();
  };

  if (isError || postErr) {
    <Box>Display error page</Box>;
  }
  console.log(posts); //why is the postId being saved as the userId?
  return (
    user && (
      <Box w="full" h="full" p={6} overflowY="auto">
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(1, 1fr)" }}
          gap={6}
          maxW="5xl"
          mx="auto"
        >
          <Banner user={user} onPostCreated={handlePostCreated}></Banner>
          {posts &&
            [...posts]
              .reverse()
              .map((post, index) => (
                <Post
                  key={index}
                  id={post.userId}
                  name={user?.name}
                  screenName={user?.screenName}
                  likes={post.likeCount}
                  image={user?.profileImageUrlHttps ?? image}
                  contentText={post.text}
                  points={post.points}
                  contentImg={post?.contentLinkUrl ?? ""}
                  videoUrl={post?.videoUrl ?? ""}
                  createdAt={post?.createdAt}
                  onPostDeleted={handlePostCreated}
                  isUserPost={true}
                />
              ))}
        </Grid>
      </Box>
    )
  );
}

export default UserFeed;
