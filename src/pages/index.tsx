import { Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit } = useForm();

  function handleSignIn() {}

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing={4}>
          <Input type="email" name="email" label="E-mail" ref={register} />
          <Input
            type="password"
            name="password"
            label="Password"
            ref={register}
          />
        </Stack>

        <Button type="submit" mt={6} colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
