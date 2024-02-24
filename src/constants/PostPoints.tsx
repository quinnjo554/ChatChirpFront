import React from "react";
import {
  FiThumbsUp,
  FiSmile,
  FiMeh,
  FiThumbsDown,
  FiFrown,
} from "react-icons/fi";
import { Button } from "@chakra-ui/react";

function PostPointsButton({ points }: { points: number }) {
  let Icon;
  let colorScheme;

  if (points > 0) {
    Icon = FiSmile;
    colorScheme = "green";
  } else if (points < 0) {
    Icon = FiFrown;
    colorScheme = "red";
  } else {
    Icon = FiMeh;
    colorScheme = "gray";
  }

  return (
    <Button variant="unstyled" color={colorScheme} leftIcon={<Icon />}>
      {points}
    </Button>
  );
}

export default PostPointsButton;
