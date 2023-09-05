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
  Image,
} from "@chakra-ui/react";
import GoogleLogo from "../../../../public/google-logo-9808.png";
import { signIn } from "next-auth/react";
function LoginModalInputs() {
  const email = useRef<string>("");
  const password = useRef<string>("");
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    email.current = e.target.value;
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    password.current = e.target.value;
    console.log(password.current);
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
          onChange={handlePasswordChange}
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
            mt={6}
            rounded={"full"}
            size="sm"
            w={20}
            h={20}
            color="black"
            variant="ghost"
            onClick={() => {
              signIn("google", { callbackUrl: "/dashboard" });
            }}
          >
            <Image p={0} m={0} src={GoogleLogo.src} alt="Google" />
          </Button>
        </Center>
      </Box>
    </Box>
  );
}

export default LoginModalInputs;
