import { Box, Button, Flex, InputGroup ,Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";


 function Dashboard(){
    return (
        <div>
            <Flex width="Full" justifyContent="center">
                
                <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg" my={4}>

                    <Box textAlign="center">    
                        <Heading> AP </Heading>
                    </Box>

                    <InputGroup my={2}>
                        <Button><Link to="/TeacherLogin"> Teacher Login</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/StudentLogin"> Student Login</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/TeacherRegister"> Teacher Register</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/StudentRegister"> Student Register</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/StudentDashboard"> Student Dashooard</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/TeacherDashboard"> Teacher Dashooard</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/StudentDashboard/McqTest"> Mcq Test</Link></Button>
                    </InputGroup>

                    <InputGroup my={2}>
                        <Button><Link to="/StudentDashboard/CodingTest"> Coding Test</Link></Button>
                    </InputGroup>
                    

                </Box>

            </Flex>
            

        </div>
        
    );
}
export default Dashboard;