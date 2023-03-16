import {
  Box,
  Container,
  Heading,
  Image,
  position,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import img5 from '../../images/5.png';

const Home = () => {
  // carosel heading custom design
  const customHeading = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textTransform: 'uppercase',
    p: '4',
    borderRadius: '4',
  };

  // custom carousel
  const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={1000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...customHeading}>
          Watch Your Future Today
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...customHeading}>
          Next Future Is Gaming
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...customHeading}>
          Grab The Future Console
        </Heading>
      </Box>
      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...customHeading}>
          Make Your Future Bright
        </Heading>
      </Box>
    </Carousel>
  );

  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} maxW={'container.xl'} p={16}>
        <Heading
          textTransform={'uppercase'}
          py={2}
          marginBottom={2}
          w={'fit-content'}
          margin={'auto'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={4}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={[40, 400]} filter={'hue-rotate(-130deg'} />
          <Text
            textAlign={'center'}
            letterSpacing={["wider", "widest"]}
            lineHeight={["180%", "190%"]}
            p={[4, 16]}
          >
            Enjoy top-shelf video editing tools, stock assets, and effects. No
            matter who you are—educator, small business owner, corporate
            manager, ketchup-on-a-hot-dog supporter—our tools are for you.
            Inspire new ideas and streamline communication across your
            classroom, school, team, or business. Enjoy top-shelf video editing
            tools, stock assets, and effects. No matter who you are—educator,
            small business owner, corporate manager, ketchup-on-a-hot-dog
            supporter—our tools are for you. Inspire new ideas and streamline
            communication across your classroom, school, team, or business.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
