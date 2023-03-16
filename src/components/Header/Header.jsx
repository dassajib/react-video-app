import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        zIndex={"overlay"}

        top={4}
        left={4}
        borderRadius={'full'}
        colorScheme={'purple'}
        onClick={onOpen}
        p={0}
        w={10}
        h={10}
      >
        <BiMenuAltLeft size={20} />
      </Button>
      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to="/">Home</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to="/videos">Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to="/videos?category=free">Free Videos</Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'}>
                <Link to="/upload">Upload Videos</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to="/login">Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
