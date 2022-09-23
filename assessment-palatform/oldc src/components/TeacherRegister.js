import React from 'react'
import {Input,Button,InputGroup,InputRightElement, Flex, Box, Heading,FormControl,CircularProgress} from '@chakra-ui/react'
//import brgImage from '../background/1.jpg';
function TeacherRegister()
{
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit =()=>{

    }
    const isLoading=0

    return(
        <>
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
                        <Heading> Teacher Register </Heading>
                    </Box>

                    <Box my={4} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            
                            <FormControl isRequired>
                                <Input type="email" 
                                    placeholder="Enter email"
                                        
                                />
                            </FormControl>

                            <FormControl isRequired mt={6}>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={show ? 'text' : 'password'}
                                        placeholder='Enter password'
                                    />
                                    <InputRightElement width='4.5rem'>

                                        <Button h='1.75rem' size='sm' onClick={handleClick} >
                                            {show ? 'Hide' : 'Show'}
                                        </Button>
                                    </InputRightElement>
                                    
                                </InputGroup>
                                <InputGroup>
                                <Input
                                        pr='4.5rem'
                                         type={show ? 'text' : 'password'}
                                        placeholder='Confirm password'
                                        my='21px'
                                    />
                                </InputGroup>
                                
                            </FormControl>
                            <Button variantColor="teal" variant="outline" width="full" mt={4} type="submit" borderColor='red.700' border='2px'>
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
            

            
        
        
        
        
        </>
       
    )
}
export default TeacherRegister;