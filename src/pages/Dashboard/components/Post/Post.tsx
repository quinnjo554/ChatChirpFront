import { useGlobalContext } from "@/contexts/UserContext";
import { getUser } from "@/hooks/auth/getUser";
import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FiCloud,
  FiMessageCircle,
  FiMoreVertical,
  FiThumbsUp,
} from "react-icons/fi";
function Post() {
  const { name, email, image } = useGlobalContext();
  const { data: user } = getUser(email);
  return (
    <Box maxW="md" p={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex p="4">
        <Box flex={"2"} gap="4" alignItems="center" flexWrap="wrap">
          <Image
            boxSize="60px"
            borderRadius="full"
            objectFit="cover"
            src={image}
            alt={user?.screenName}
          />
          <Box>
            <Heading size="sm">{user?.screenName}</Heading>
            <Text fontSize="sm">Creator, Chakra UI</Text>
          </Box>
        </Box>

        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<FiMoreVertical />}
        />
      </Flex>

      <Text p="4">
        With Chakra UI, I wanted to sync the speed of development with the speed
        of design. I wanted the developer to be just as excited as the designer
        to create a screen.
      </Text>

      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <Flex justify="space-between" p="4">
        <Button flex="1" variant="ghost" leftIcon={<FiThumbsUp />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<FiMessageCircle />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<FiCloud />}>
          Share
        </Button>
      </Flex>
    </Box>
  );
}

export default Post;
