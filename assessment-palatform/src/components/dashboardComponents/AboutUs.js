import { Button, Flex, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';
import {FcBusinessman,FcManager} from 'react-icons/fc';


const AboutUs = () => {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)');
  const array = [

    {
      id: 2,
      text: 'Login as a Student',
      icon: FcManager,
      to:'/StudentLogin',
    },
    {
      id: 3,
      text: 'Login as Admin',
      icon: FaDev,
      to:"/TeacherLogin"
    },
  ];
  return (
    
    <Flex
      minH="70vh"
      alignItems="center"
      justifyContent="space-between"
      w="full"
      py="16"
      px={isLargerThanMD ? '16' : '6'}
      flexWrap="wrap"
      flexDirection={isLargerThanMD ? 'row' : 'column'}
    >
      
      {array.map((arr) => (
        <>
          
          <Flex
            height="300px"
            bg=''
            width={isLargerThanMD ? '32%' : 'full'}
            shadow="md"
            p="6"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            flexDirection="column"
            textAlign="center"
            mb={isLargerThanMD ? '0' : '4'}
            border="1px solid #C4DDFF"
          >
            <Icon as={arr.icon} boxSize={14} color="blue.600" mb="5" />
            <Button bgGradient='linear(to-r, #144d53,#23d173,#e4eddb)'>
            <Text><Link to={arr.to}>{arr.text}</Link></Text>
            </Button>
          </Flex>

          <Spacer />
         
        </>
      ))}
       
    </Flex>
   
  );
};

export default AboutUs;