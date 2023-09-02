"use client";
import LandingPage from "@/pages/Landing/LandingPage";
import theme from "@/theme/theme";
import { Box, ChakraBaseProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Box>
        <LandingPage></LandingPage>
      </Box>
    </ChakraBaseProvider>
  );
}
