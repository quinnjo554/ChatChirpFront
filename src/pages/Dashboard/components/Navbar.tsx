import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  Image,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";

import Chirp from "../../../../public/Chirp.png";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FiLogOut } from "react-icons/fi";
import React from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5} boxShadow="lg">
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
            <List p="2">
              <ListItem mt="3">
                <Button rounded="full" size="lg" variant="ghost">
                  <ListIcon />
                  Profile
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  rounded="full"
                  mt={3}
                  size="lg"
                  variant="solid"
                  as={Link}
                  href={"/api/auth/signout?callbackUrl=/"}
                >
                  <FiLogOut />
                  Sign Out
                </Button>
              </ListItem>
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default Navbar;
