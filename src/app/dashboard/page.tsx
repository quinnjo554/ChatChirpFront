"use client";
import LandingPage from "@/pages/Landing/LandingPage";
import theme from "@/theme/theme";
import { Box, Button, ChakraBaseProvider } from "@chakra-ui/react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
export default function Dashboard() {
  const { data: user } = useSession();
  console.log({ user });
  return (
    <ChakraBaseProvider theme={theme}>
      <Link href={"/api/auth/signout?callbackUrl=/"}>signOut</Link>
    </ChakraBaseProvider>
  );
}
