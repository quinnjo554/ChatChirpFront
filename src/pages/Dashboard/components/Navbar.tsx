import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box p={5}>
      <HamburgerIcon boxSize={8} onClick={onOpen} />
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent rounded="2xl">
          <DrawerBody display="inline">
            <List>
              <ListItem>
                <ListIcon></ListIcon>
                <Button variant="ghost">ajsdhaksda</Button>
              </ListItem>
              <ListItem>
                <Button as={Link} href={"/api/auth/signout?callbackUrl=/"}>
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
