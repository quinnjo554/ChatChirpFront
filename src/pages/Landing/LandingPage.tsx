"use client";
import React from "react";
import LandingHero from "./Components/LandingHero/LandingHero";
import LoginCard from "./Components/LoginCard/LoginCard";
import { Box } from "@chakra-ui/react";

function LandingPage() {
  //add light and dark theme
  return (
    <Box>
      <LoginCard></LoginCard>
      <LandingHero></LandingHero>
    </Box>
  );
}

export default LandingPage;
