import PostPointsButton from "@/constants/PostPoints";
import { deletePost } from "@/hooks/Posts/PostHooks";
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  FiHeart,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useMutation } from "react-query";
function Post({
  id,
  name,
  image,
  contentText,
  likes,
  contentImg,
  points,
  screenName,
  videoUrl,
  createdAt,
  isUserPost,
  onPostDeleted,
}: {
  id: string;
  name: string | undefined;
  image: string;
  contentText: string;
  contentImg: string;
  likes: number;
  points: number;
  screenName: string | undefined;
  videoUrl: string | null;
  createdAt: string;
  isUserPost: boolean;
  onPostDeleted: () => void;
}) {
  const date = Date.parse(createdAt);
  const postDate = new Date(date);
  const mutation = useMutation(deletePost);

  const handleSubmit = () => {
    mutation.mutate(id, {
      onSuccess: () => {
        onPostDeleted();
      },
    });
  };

  const menuItems = isUserPost ? <MenuList><MenuItem onClick={handleSubmit}>Delete</MenuItem></MenuList> : <MenuList><MenuItem>Report</MenuItem></MenuList>;

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex p="2">
        <Avatar size="lg" src={image} name={name} />
        <Box flex="1" ml="4">
          <Stack>
            <Flex>
              <Heading mr={1} size="md">
                {name}
              </Heading>
              <Text fontSize="md">@{screenName}</Text>
            </Flex>
            <Flex>
              <Text fontSize="sm">{postDate.toDateString()}</Text>
            </Flex>
          </Stack>
        </Box>
        <Menu>
          <MenuButton
            as={IconButton}
            variant="outline"
            aria-label="Options"
            icon={<FiMoreHorizontal />}
          />
          {menuItems}
        </Menu>
      </Flex>

      <Text p={4}>{contentText}</Text>
      {contentImg && (
        <Image
          p={4}
          objectFit="contain"
          width="full"
          height="auto"
          src={contentImg}
          alt="Chat Chirp Img"
        />
      )}
      {videoUrl && (
        <Box p={4}>
          <iframe width={"400"} height={"400"} src={videoUrl}></iframe>
        </Box>
      )}
      <Center>
        <Button rightIcon={<FiHeart />} variant="ghost">
          {likes} Likes
        </Button>
        <PostPointsButton points={points}></PostPointsButton>
      </Center>
    </Box>
  );
}

export default Post;
