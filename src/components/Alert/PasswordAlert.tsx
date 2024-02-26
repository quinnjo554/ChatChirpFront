import { PhoneIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function PasswordAlert({ userDefault }: { userDefault: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
//for scope you can just remove password from the homepage
  useEffect(() => {
    if (userDefault) {
      onOpen();
    }
  }, [userDefault, onOpen]);

  function PostPassword() {
    //make post user
  }

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Password Change Required</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            For security reasons, we need you to change your password
          </AlertDialogBody>
          <AlertDialogFooter>
            <InputGroup>
              <Input type="password" placeholder="Enter New Password" />
            </InputGroup>
            <Button onClick={PostPassword}>Confirm</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default PasswordAlert;
