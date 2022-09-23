import React, { useState } from 'react'
import {Input,Button,InputGroup,InputRightElement, Flex, Box, Heading,FormControl,CircularProgress} from '@chakra-ui/react'
import brgImage from '../background/6.jpg';
import { RegisterStudent } from './Services/api';
import Nav from '../components/dashboardComponents/Nav';
import Footer from '../components/dashboardComponents/Footer';
import {useNavigate} from 'react-router-dom';



const initialValues={
    Email:"",
    Password:"",
    
};
function StudentRegister()
{
    const navigate = useNavigate(); // initializing useNavigate for redirections

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    //const {Email,Password,ConfirmPassword}=user;

    const isLoading=0;

    const [user , setUser]=useState(initialValues);
    const {Password,ConfirmPassword}=user;


    const onValueChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
        console.log(e.target.value)
       // console.log(user);
       
    }

    const AddStudent = async(e)=>{
        e.preventDefault();
        console.log(user);
        if(Password===ConfirmPassword)
        {
            
           // alert("ok");
            
            RegisterStudent(user).then((res)=>{
                const data= res.data;

                if(data.status==='success')
                {
                    //alert(data.message);
                    navigate('/StudentLogin');

                }
                else{
                    alert(data.message);
                }

            })
            
        }
        
        else{
            alert('Password and Confirm password should be same!')
        }
        
    }

    return(
        <>
            <Nav />
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={12}
                //bgImage="url('/src/background/1.jpg')"
                bgImage={brgImage}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
            >
    
  
            <Flex width="Full" align="center" justifyContent="center" my="130px" bg='white'>
                <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg"  >
                    <Box textAlign="center">
                        <Heading> Student Register </Heading>
                    </Box>

                    <Box my={4} textAlign="left">
                        <form >
                            
                            <FormControl isRequired>
                                <Input type="email" 
                                    placeholder="Enter email"
                                    onChange={(e)=>onValueChange(e)}
                                    name="Email"
                                />
                            </FormControl>

                            <FormControl isRequired mt={6}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                        onChange={(e)=>onValueChange(e)}
                                        name="Password"
                                    />
                                    <InputRightElement width='4.5rem'>

                                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    
                                </InputGroup>
                                <InputGroup>
                                <Input
                                       // id="confirmPassword"
                                        pr='4.5rem'
                                         type={show ? 'text' : 'password'}
                                        placeholder='Confirm password'
                                        my='21px'
                                        onChange={(e)=>onValueChange(e)}
                                        name="ConfirmPassword"
                                    />
                                </InputGroup>
                                
                            </FormControl>
                            <Button variantcolor="teal" variant="outline" width="full" mt={4} type="submit" borderColor='red.700' border='2px' onClick={(e)=>AddStudent(e)}>
                            {isLoading ? (
                                <CircularProgress isIndeterminate size="24px" color="teal" />
                            ): (
                                'Sign Up'
                            )}
                           
                        </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
            </Box>
            

            
        
        
        
            <Footer />
        </>
       
    )
}
export default StudentRegister;