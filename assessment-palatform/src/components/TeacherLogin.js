import React from 'react'
import {Input,Button,InputGroup,InputRightElement, Flex, Box, Heading,FormControl,CircularProgress} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import Nav from '../components/dashboardComponents/Nav';
import Footer from '../components/dashboardComponents/Footer';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { LoginTeacherAPI } from './Services/api';
import swal from 'sweetalert';


const initialValues={
    Email:"",
    Password:"",
    
};
function TeacherRegister()
{
    const navigate = useNavigate(); // initializing useNavigate for redirections

    const [user,setUser]=useState(initialValues);

    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value)
       // console.log(user);
       
    }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit =(e)=>{
        e.preventDefault(); //vvvvvvvvvvvvvvvvvvvvvviiiiiiiiiiiiiiiiiiiiiiimmmmmmmmmmmmmmmmmmmmmmmmmmm (very imp)
        LoginTeacherAPI(user).then(res=>{
            const data=res.data;
            if(data.status==='success')
            {
                //alert(data.message);
                navigate('/TeacherDashboard')
            }
            else{
                //alert(data.message);
                swal("contect to administrator", "You are not admin", "warning");

                navigate('/TeacherLogin')
            }
        })

    }
    const isLoading=0

    return(
        <>
            <Nav />
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                // bgImage="url('/src/background/1.jpg')"
                //bgImage={brgImage}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
            >
    
  
            <Flex width="Full" align="center" justifyContent="center" my="130px" >
                <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg"  >
                    <Box textAlign="center">
                        <Heading> Admin Login </Heading>
                    </Box>

                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            
                            <FormControl isRequired>
                                <Input type="email" 
                                    placeholder="Enter email"
                                    name='Email'
                                    onChange={(e)=>onValueChange(e)}
                                        
                                />
                            </FormControl>

                            <FormControl isRequired mt={6}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        name='Password'
                                        onChange={(e)=>onValueChange(e)}
                                    />
                                    <InputRightElement width='4.5rem'>

                                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    
                                </InputGroup>
                               
                                
                            </FormControl>
                            <Button variantColor="teal" variant="outline" width="full" mt={4} type="submit" borderColor='red.700' border='2px' onClick={(e)=>handleSubmit(e)}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ): (
                                'Sign In'
                            )}
                           
                        </Button>
                        </form>
                    </Box>
                    {/* <Link to='/TeacherRegister' style={{color:'teal'}}>Don't have account?</Link> */}
                </Box>
            </Flex>
            </Box>
            

            
        
        
        
        <Footer />
        </>
       
    )
}
export default TeacherRegister;