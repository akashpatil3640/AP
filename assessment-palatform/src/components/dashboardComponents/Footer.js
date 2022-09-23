import { Flex, Text, Link } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Flex
      w="full"
      bg="blackAlpha.50"
      minHeight="20vh"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
    >
      <Text mb="3">
      Copyright {' '}
        <Link href="//127.0.0.1:3000" isExternal color="blue.500">
        Assessment Platform  
        </Link>
         {' '}© 2022 . All Rights Reserved
      </Text>
      <Text opacity="0.5"></Text>
    </Flex>
  );
};

export default Footer;