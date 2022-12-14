import {
  Flex,
  Spacer,
  Image,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import teamImage from '../assets/teamImage.jpg';

const Services = () => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      width="full"
      minHeight="70vh"
      alignItems="center"
      px={isLargerThanLG ? '16' : '6'}
      py="16"
      justifyContent="center"
      flexDirection={isLargerThanLG ? 'row' : 'column'}
    >
      <Flex
        w={isLargerThanLG ? '40%' : 'full'}
        mb={isLargerThanLG ? '0' : '6'}
        alignItems="center"
        justifyContent="center"
      >
        <Image src={teamImage} alt="Chakra Team" w="full" />
      </Flex>
      <Spacer />
      <Flex
        w={isLargerThanLG ? '60%' : 'full'}
        flexDirection="column"
        ml={isLargerThanLG ? '7' : '0'}
      >
        <Text fontSize={isLargerThanLG ? '5xl' : '4xl'} fontWeight="bold">
          We build, We revive
        </Text>

        <Text mb="6" opacity="0.8">
          Your tests are need to be secure and protected. We ensure you will not face any other probleams after use of the platform. We are trusted by over
          500+ companies and collages to deliver quality making testes.
        </Text>

        <Button width="200px" size="lg" colorScheme="blue">
          About Us
        </Button>
      </Flex>
    </Flex>
  );
};

export default Services;