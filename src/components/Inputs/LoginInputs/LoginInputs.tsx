import React, { ChangeEvent, useEffect, useRef } from "react";
import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { signIn, getProviders } from "next-auth/react";
import Link from "next/link";
function LoginModalInputs() {
  const email = useRef<string>("");
  const password = useRef<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    email.current = e.target.value;
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    password.current = e.target.value;
  };
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  return (
    <Box>
      <Box>
        <Heading color="gray.200" mt={5} fontSize="lg">
          Email
        </Heading>
        <Input
          rounded="md"
          bg="gray.300"
          type="email"
          w="100%"
          size="md"
          onChange={handleEmailChange}
        ></Input>
      </Box>
      <Box mt={10}>
        <Heading color="gray.300" size="sm">
          Password
        </Heading>
        <Input
          rounded="md"
          bg="gray.300"
          type="password"
          w="100%"
          onChange={() => handlePasswordChange}
          size={"md"}
        />
      </Box>
      <Box mt={16}>
        <Button
          size="lg"
          w="100%"
          color="white"
          rounded={"md"}
          bg="twitter.600"
          onClick={() => onSubmit()}
        >
          Login
        </Button>
        <Box position="relative" pt="16">
          <Divider
            borderRadius="lg"
            width="100%"
            borderColor="black"
            borderWidth="2px"
          />
          <AbsoluteCenter bg="white" mt={8} px={6}>
            <Text size="md" fontWeight="bold">
              OR
            </Text>
          </AbsoluteCenter>
        </Box>
        <Center>
          <Button
            mt={10}
            rounded={"xl"}
            size="lg"
            color="black"
            w="40%"
            variant={"ghost"}
            onClick={() => {
              signIn("google", { callbackUrl: "/dashboard" });
            }}
          >
            Sign In with google
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default LoginModalInputs;
