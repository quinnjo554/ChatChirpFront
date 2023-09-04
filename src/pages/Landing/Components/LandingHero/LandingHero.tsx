"use client";
import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import landingImg from "../../../../../public/ameer-basheer-gV6taBJuBTk-unsplash.jpg";
import React from "react";
import { useUserEmail } from "@/hooks/auth/getUser";
function LandingHero() {
  return (
    <Box
      w="60%"
      h="100vh"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Image
        rounded="lg"
        w="100%"
        h="100%"
        src={landingImg.src}
        alt="Landing Image"
      />
      <Box position="absolute" w="60%" bottom="20px" left="200px">
        <Center h="110vh">
          <Flex flexDirection="column" alignItems="start">
            <Text
              pb={3}
              fontSize="6xl"
              fontWeight="extrabold"
              color="white"
              mb="4"
            >
              Start Your Free Chat Chirp Account Today!
            </Text>
            <Text fontSize="3xl" fontWeight={"bold"} color="twitter.300">
              Chat With Friends, Family and others while promoting kindness in
              your posts
            </Text>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}

export default LandingHero;
