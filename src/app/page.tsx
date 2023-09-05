"use client";
import { ReactQueryProvider } from "@/contexts/ReactQueryProvider";
import LandingPage from "@/pages/Landing/LandingPage";
import theme from "@/theme/theme";
import { Box, ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ReactQueryProvider>
      <ChakraProvider theme={theme}>
        <Box>
          <LandingPage></LandingPage>
        </Box>
      </ChakraProvider>
    </ReactQueryProvider>
  );
}
