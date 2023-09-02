import React from "react";
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
          <Box mt={16}>
            <Button
              size="lg"
              w="100%"
              color="white"
              rounded={"md"}
              bg="twitter.600"
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
              >
                Sign up
              </Button>
            </Center>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}
