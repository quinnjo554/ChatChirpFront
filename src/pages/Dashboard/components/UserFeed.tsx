"use client";
import { useGlobalContext } from "@/contexts/UserContext";
import { useUserEmail } from "@/hooks/auth/getUser";
import defaultUser from "@/utils/UserData/defaultUser";
import { Box } from "@chakra-ui/react";
import React from "react";

function UserFeed() {
  const { name, email, image } = useGlobalContext();
  //check if user is authenticated, then post them to the db
  const dUser = defaultUser(name, email);
  const { data: user, isError } = useUserEmail(email, dUser);
  return (
    <Box>
      <p>{user?.createdAt}</p>
      <p>{user?.id}</p>
    </Box>
  );
}

export default UserFeed;
