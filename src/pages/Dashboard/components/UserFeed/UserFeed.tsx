"use client";
import { useGlobalContext } from "@/contexts/UserContext";
import { useUserEmail } from "@/hooks/auth/getUser";
import defaultUser from "@/utils/UserData/defaultUser";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import Post from "../Post/Post";
import PasswordAlert from "@/components/Alert/PasswordAlert";

function UserFeed() {
  const { name, email, image } = useGlobalContext();
  //check if user is authenticated, then post them to the db
  const dUser = defaultUser(name, email); //autoinit a user
  //pull from the cache and get a list of the users reco posts.
  const { data: user, isError } = useUserEmail(email, dUser);

  console.log(user);
  if (isError) {
    <Box>Display error page</Box>;
  }

  return (
    <Box>
      <PasswordAlert userDefault={user?.defaultProfile ?? true} />
      <Post
        name={user?.screenName}
        contentText={"GET postdata"}
        image={image}
        contentImg=""
      ></Post>
      <p>password {user?.hashedPassword}</p>
    </Box>
  );
}

export default UserFeed;
