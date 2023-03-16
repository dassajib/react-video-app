import {
  Avatar,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={16}>
      <form>
        <VStack
          alignItems={'stretch'}
          m={'auto'}
          w={['full', 96]}
          spacing={8}
        >
          <Heading textAlign={"center"}>Sign Up here</Heading>
          <Avatar alignSelf={"center"} boxSize={20} />
          <Input
            type={'text'}
            placeholder="Name"
            focusBorderColor="purple.500"
            borderColor={'purple.500'}
            required
          />
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
          <Button colorScheme={'purple'} type={'submit'}>
            Sign Up
          </Button>
          <Text textAlign={'center'}>
            have account here? {'  '}
            <Button variant={'link'} alignItems={'flex-end'}>
              <Link to="/login">Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default SignUp;
