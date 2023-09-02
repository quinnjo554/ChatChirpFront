import React from "react";
import { Box, Heading, Input } from "@chakra-ui/react";

function LoginModalInputs() {
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
          size={"md"}
        />
      </Box>
    </Box>
  );
}

export default LoginModalInputs;
