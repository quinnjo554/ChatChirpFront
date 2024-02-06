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
  FiDribbble,
  FiMessageCircle,
  FiMoreVertical,
  FiSlack,
  FiThumbsUp,
} from "react-icons/fi";
function Post({
  name,
  image,
  contentText,
  contentImg,
  points,
}: {
  name: string | undefined;
  image: string;
  contentText: string;
  contentImg: string;
  points: number;
}) {
  return (
    <Box maxW="md" p={2} borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex p="4">
        <Box flex={"2"} gap="4" alignItems="center" flexWrap="wrap">
          <Image
            boxSize="60px"
            borderRadius="full"
            objectFit="cover"
            src={image}
            alt={name}
          />
          <Box>
            <Heading size="sm">{name}</Heading>
          </Box>
        </Box>
        <IconButton
          variant="ghost"
          colorScheme="gray"
          aria-label="See menu"
          icon={<FiMoreVertical />}
        />
      </Flex>

      <Text p="4">{contentText}</Text>

      {contentImg ? (
        <Image objectFit="cover" src={contentImg} alt="Chakra UI" />
      ) : (
        <></>
      )}

      <Flex justify="space-between" p="4">
        <Button flex="1" variant="ghost" leftIcon={<FiThumbsUp />}>
          Like
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<FiMessageCircle />}>
          Comment
        </Button>
        <Button flex="1" variant="ghost" leftIcon={<FiDribbble />}>
          {points}
        </Button>
      </Flex>
    </Box>
  );
}

export default Post;
