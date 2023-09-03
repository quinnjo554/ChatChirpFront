"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Button,
  Divider,
  AbsoluteCenter,
  Text,
  Center,
} from "@chakra-ui/react";
import LoginInputs from "@/components/Inputs/LoginInputs/LoginInputs";
export default function LoginCard() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="40%"
      height="100vh"
      position="fixed"
      right="0"
    >
      <Card
        boxShadow={"2xl"}
        shadow="blue"
        rounded={"2xl"}
        h="700px"
        minW={"50%"}
        p={5}
      >
        <CardHeader>
          <Heading
            fontWeight={"extrabold"}
            mt={10}
            fontSize="6xl"
            color="black"
          >
            Login
          </Heading>
        </CardHeader>
        <CardBody>
          <LoginInputs></LoginInputs>
        </CardBody>
      </Card>
    </Box>
  );
}
