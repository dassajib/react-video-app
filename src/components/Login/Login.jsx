import {
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack alignItems={'stretch'} m={'auto'} my={16} w={["full", 96]} spacing={8}>
          <Heading textAlign={"center"}>Welcome back to here</Heading>
          <Input
            type={'email'}
            placeholder="Email"
            focusBorderColor="purple.500"
            borderColor={'purple.500'}
            required
          />
          <Input
            type={'password'}
            placeholder="password"
            focusBorderColor="purple.500"
            borderColor={'purple.500'}
            required
          />
          <Button variant={'link'} alignItems={'flex-end'}>
            <Link to="/forgetpassword">Forget Password?</Link>
          </Button>
          <Button colorScheme={'purple'} type={'submit'}>
            Log In
          </Button>
          <Text textAlign={'center'}>
            New User? {"  "}
            <Button variant={'link'} alignItems={'flex-end'}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
