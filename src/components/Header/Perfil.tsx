import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData: boolean;
}

export default function Perfil({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Leandro Delinger</Text>
          <Text color="gray.300" fontSize="small">
            leandro.delinger@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Leandro Delinger"
        src="https://github.com/leandrodelinger.png"
      />
    </Flex>
  );
}
