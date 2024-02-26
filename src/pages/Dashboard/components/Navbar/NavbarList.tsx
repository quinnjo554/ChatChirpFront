import CreatePost from "@/forms/CreatePost/CreatePost";
import {
  List,
  ListItem,
  Button,
  ListIcon,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiLogOut } from "react-icons/fi";

function NavbarList() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <List p="2">
      <ListItem></ListItem>
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
  );
}

export default NavbarList;
