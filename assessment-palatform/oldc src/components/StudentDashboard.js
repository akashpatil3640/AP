import { Box, Button, Flex, InputGroup ,Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// import {StudentRegister} from '../components/StudentRegister';
// import TeacherRegister from '../components/TeacherRegister';
// import StudentLogin     from '../components/StudentLogin';
// import TeacherLogin from '../components/TeacherLogin';

 function Dashboard(){
    return (
        <div>
            <Flex width="Full" justifyContent="center">
                
                <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg" my={4}>
                <Box textAlign="center">    
                        <Heading> Student Dashboard </Heading>
                    </Box>
                    <Box justifyContent="center" textAlign="center">
                        <InputGroup my={2}>
                            <Button><Link to="/StudentDashboard/McqTest"> Attempt MCQ Test</Link></Button>
                        </InputGroup>

                        <InputGroup my={2}>
                            <Button><Link to="#"> Attempt Coding Test</Link></Button>
                        </InputGroup>
                 
                    </Box>      
                   


                    

                </Box>

            </Flex>
            

        </div>
        
    );
}
export default Dashboard;