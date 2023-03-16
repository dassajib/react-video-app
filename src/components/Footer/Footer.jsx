import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.600'} minH={40} p={16} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4}>
          <Heading textAlign={"center"} size={'md'} textTransform={'uppercase'}>
            Let us know about your query
          </Heading>
          <HStack borderBottom={'2px solid white'} py={2}>
            <Input
              placeholder="Enter your email"
              border={'none'}
              borderRadius={'none'}
              borderColor={"purple.500"}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              color={'purple'}
              p={0}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} alignItems={'center'}>
            Video App
          </Heading>
          <Text>Rights Received</Text>
        </VStack>
        <VStack w={'full'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            alignItems={'center'}
          >
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme={'white'}>
            <HStack>
              <AiFillYoutube size={20} />
              <a target={"blank"} href="https://www.youtube.com/@hoodkholagaanera4274">
                Youtube
              </a>
            </HStack>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <HStack>
              <AiFillGithub size={20} />
              <a target={"blank"} href="https://github.com/dassajib">Github</a>
            </HStack>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <HStack>
              <AiFillLinkedin size={20} />
              <a target={"blank"} href="https://www.linkedin.com/in/sajib-das/">Linkedin</a>
            </HStack>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
