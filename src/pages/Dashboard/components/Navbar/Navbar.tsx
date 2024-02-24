import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Link,
  List,
  ListIcon,
  ListItem,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import Chirp from "../../../../../public/Chirp.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";
import NavbarList from "./NavbarList";
import CreatePost from "@/forms/CreatePost/CreatePost";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5} w="full" boxShadow="lg" display="flex">
      <HamburgerIcon boxSize={8} onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent rounded="2xl">
          <DrawerBody display="inline">
            <DrawerHeader textAlign="center">
              <Flex align="center" justify="center">
                <Image
                  bg={"black"}
                  _hover={{ bg: "grey" }}
                  rounded="full"
                  w="20"
                  h="20"
                  src={Chirp.src}
                />
              </Flex>
            </DrawerHeader>
            <NavbarList></NavbarList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
