import { createPost } from "@/hooks/Posts/PostHooks";
import { PostRequest, createPostRequest } from "@/models/PostRequest";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import React, { ReactElement } from "react";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from "react-query";

function CreatePost({
  isOpen,
  onClose,
  userid,
  onPostCreated,
}: {
  isOpen: boolean;
  onClose: () => void;
  userid: string;
  onPostCreated: () => void;
}) {
  const [text, setText] = React.useState("");

  const [image, setImg] = React.useState("");

  const [video, setVid] = React.useState("");

  const mutation = useMutation(createPost);

  const handleTextChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setText((event.target as HTMLTextAreaElement).value);
  };

  const handleImgChange = (event: React.FormEvent<HTMLInputElement>) => {
    setImg((event.target as HTMLInputElement).value);
  };

  const handleVidChange = (event: React.FormEvent<HTMLInputElement>) => {
    setVid((event.target as HTMLInputElement).value);
  };
  const handleSubmit = () => {
    const data = createPostRequest(userid, text, image, video);
    console.log(userid);
    mutation.mutate(data, {
      onSuccess: () => {
        setImg("");
        setText("");
        setVid("");
        onClose();
        onPostCreated();
      },
    });
    setImg("");
    setText("");
    setVid("");
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent borderRadius="lg" boxShadow="dark-lg">
        <ModalHeader fontSize="lg" fontWeight="bold">
          Create a Post
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Chirp</FormLabel>
            <Textarea
              value={text}
              onChange={handleTextChange}
              placeholder="What's on your mind?"
              size="sm"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Image URL</FormLabel>
            <Input
              value={image}
              onChange={handleImgChange}
              placeholder="Add an image URL"
              size="sm"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Youtube Embedded URL</FormLabel>
            <Input
              value={video}
              onChange={handleVidChange}
              placeholder="Add a Youtube URL"
              size="sm"
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleSubmit} colorScheme="blue" mr={3} size="sm">
            Post
          </Button>
          <Button onClick={onClose} variant="ghost" size="sm">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
export default CreatePost;
