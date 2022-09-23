import { Box, Button, Flex, InputGroup ,Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Nav from '../components/dashboardComponents/Nav';
import Hero from '../components/dashboardComponents/Hero';
import AboutUs from '../components/dashboardComponents/AboutUs';
import Services from '../components/dashboardComponents/Services';
import Testimonials from '../components/dashboardComponents/Testimonials';
import React, { useRef } from 'react';
import { useDisclosure} from '@chakra-ui/react';
import DrawerComponent from '../components/dashboardComponents/DrawerComponent';
import ContactUs from '../components/dashboardComponents/ContactUs';
import Footer from '../components/dashboardComponents/Footer';

 function Dashboard(){

//     <Box>
//     <Box>
//     <Nav ref={btnRef} onOpen={onOpen} />
//     <Hero />
//     <AboutUs />
//     <Services />
//     <Testimonials />
//     <ContactUs />
//     <Footer />

//     <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
//   </Box>
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (

        <Box>
        <Box>
        <Nav ref={btnRef} onOpen={onOpen} />
        <Hero />
        <AboutUs />
        <Services />
        <Testimonials />
        
        
      </Box>

        <div>
            <Flex width="Full" justifyContent="center">
                
               

            </Flex>
            

        </div>

        <Footer />
  
        <DrawerComponent isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
        </Box>
        
        
    );
}
export default Dashboard;