import React, { useState } from "react";
import {RadioGroup,Radio,Stack,Box, Text, Button, Alert} from "@chakra-ui/react";
import questions from "./McqQuestions.json"
import Nav from '../components/dashboardComponents/Nav';
import Footer from '../components/dashboardComponents/Footer';
function McqTest(){
    
    

    const [value, setValue] = useState('');
    const [QuestionCounter,setQusetionCounter]=useState(1); //hook for question ctr
    const [CurrentQuestion,setCurrentQuestion]=useState(0); //moving through each question
	const [Score,SetScore]=useState(1);
	const Q=questions[CurrentQuestion];
	//let res=0;
	const handleNextButton =(e,res)=>{
		console.log(value)
		const nextque=CurrentQuestion+1;
		if(res===true)
		{
			SetScore(Score+1);
			console.log("score="+Score);
		}
		
		/* condition for end of questions */
		if(nextque < questions.length)
		{
			setQusetionCounter(QuestionCounter+1);
			setCurrentQuestion(nextque);
			setValue('');
		}else{
			let akash=0
			if(res===false)
			{
				akash=Score;
				akash-=1
			}
			else
				akash=Score
				
			alert("Your score is :" + akash)
		}
		
	}

	const handleSubmitButton=(e)=>{
		if(e===true)
		{
			SetScore(Score+1);
		}
	}

	const handleRadio=(e)=>{
		//console.log(e.target.value -1);
		if(Q.answerOptions[e.target.value -1 ])
		{
			SetScore(Score+1);
		}
	}
	
    return(
        <>
		<Nav />
        <Box width="Full" align="center" justifyContent="center" my="130px" >
            {false ? (<Text>you scored 1 out of {questions.length}</Text>):(
            <Box p={8} maxWidth="500px" borderWidth={4} borderRadius={8} boxShadow="lg"  >
                <Box textAlign="center">
                    <Text>Question {QuestionCounter} / {questions.length}</Text>
                </Box>

				<Box textAlign="center">
                    <Text>{questions[CurrentQuestion].questionText}</Text> 	
                </Box>

                <Box my={4} textAlign="left">
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction='column' >
								
								<Radio value="0" > {Q.answerOptions[0].answerText}</Radio>
								<Radio value="1" > {Q.answerOptions[1].answerText}</Radio>
								<Radio value="2" > {Q.answerOptions[2].answerText}</Radio>
								<Radio value="3" >{Q.answerOptions[3].answerText}</Radio>
								
								

                        </Stack>
                    </RadioGroup>
					
					<Box textAlign="right">
						<Box textAlign='right' my={5}>
							
							<Button type="submit" variantcolor='teal' color='orange' onClick={(e)=>handleNextButton(e,Q.answerOptions[value].isCorrect)}>  Next</Button>
						</Box>

						
					</Box>


					
                </Box>
            </Box>
            )}
            
        </Box>
		<Footer />
		</>

    )
}
export default McqTest;