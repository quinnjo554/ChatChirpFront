"use client";
import React from "react";
import Chirp from "../../../../../public/Chirp.png";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Image,
  Flex,
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
          <Flex alignItems="center">
            <Heading
              fontWeight={"extrabold"}
              mt={10}
              fontSize="6xl"
              color="black"
            >
              Login
            </Heading>
            <Image mt={10} src={Chirp.src} w={9} h={9} ml={5} />
          </Flex>
        </CardHeader>
        <CardBody>
          <LoginInputs />
        </CardBody>
      </Card>
    </Box>
  );
}
