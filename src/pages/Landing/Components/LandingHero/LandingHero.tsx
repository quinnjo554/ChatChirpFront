import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import landingImg from "../../../../../public/ameer-basheer-gV6taBJuBTk-unsplash.jpg";
import logo from "../../../../../public/TempLogo.png";
import React from "react";

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
      <Box position="absolute" top="20px" left="20px">
        <Image rounded="full" src={logo.src} w={32}></Image>
      </Box>
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
            <Text fontSize="2xl" fontWeight={"bold"} color="twitter.300">
              Chat With Friends, Family and others while promoting kindness
            </Text>
          </Flex>
        </Center>
      </Box>
    </Box>
  );
}

export default LandingHero;
