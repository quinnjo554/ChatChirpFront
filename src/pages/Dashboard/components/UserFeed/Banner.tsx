import React from "react";
import {
  Box,
  Flex,
  Avatar,
  Heading,
  Text,
  Stack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import User from "@/models/User";
import CreatePost from "@/forms/CreatePost/CreatePost";

interface BannerProps {
  user: User;
  onPostCreated: () => void;
}

const Banner: React.FC<BannerProps> = ({ user, onPostCreated }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Box
        w="full"
        h="250px"
        bg="gray.700"
        p={6}
        display="flex"
        flexDirection="column"
        bgImage={user.profileBannerUrl}
        bgSize="cover"
        zIndex={10}
      />
      <Box flexGrow={1} />
      <Box
        w="full"
        color="white"
        h="auto"
        bg="black"
        p={6}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box w="max-content">
          <Flex alignItems="center" mb={4}>
            <Avatar
              size="2xl"
              src={user.profileImageUrlHttps}
              name={user.name}
              mr={4}
            />
            <Stack spacing={2}>
              <Heading size="md">{user.name}</Heading>
              <Text fontSize="sm">@{user.screenName}</Text>
              {user.description && (
                <Text maxWidth="56" fontSize="sm">
                  {user.description}
                </Text>
              )}
            </Stack>
          </Flex>
          <Box my={4}>
            <Flex justifyContent="space-between">
              <Stack alignItems="center">
                <Text fontWeight="bold">{user.followersCount}</Text>
                <Text fontSize="sm">Followers</Text>
              </Stack>
              <Stack alignItems="center">
                <Text fontWeight="bold">{user.friendsCount}</Text>
                <Text fontSize="sm">Following</Text>
              </Stack>
              <Stack alignItems="center">
                <Text fontWeight="bold">{user.points}</Text>
                <Text fontSize="sm">Points</Text>
              </Stack>
            </Flex>
          </Box>
          <Button colorScheme="twitter" size="sm" width="full" mt={4}>
            Follow
          </Button>
          <Button
            onClick={onOpen}
            colorScheme="gray"
            size="sm"
            width="full"
            mt={4}
          >
            Post
          </Button>
          <CreatePost
            userid={user.id}
            isOpen={isOpen}
            onClose={onClose}
            onPostCreated={onPostCreated}
          ></CreatePost>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
