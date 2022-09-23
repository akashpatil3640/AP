import React, { useState } from "react";
import {RadioGroup,Radio,Stack,Box, Text, Button} from "@chakra-ui/react";
import questions from "./McqQuestions.json"
function McqTest(){
    
    // const questions = [
	// 	{
	// 		questionText: 'What is the capital of France?',
	// 		answerOptions: [
	// 			{ answerText: 'New York', isCorrect: false },
	// 			{ answerText: 'London', isCorrect: false },
	// 			{ answerText: 'Paris', isCorrect: true },
	// 			{ answerText: 'Dublin', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'Who is CEO of Tesla?',
	// 		answerOptions: [
	// 			{ answerText: 'Jeff Bezos', isCorrect: false },
	// 			{ answerText: 'Elon Musk', isCorrect: true },
	// 			{ answerText: 'Bill Gates', isCorrect: false },
	// 			{ answerText: 'Tony Stark', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'The iPhone was created by which company?',
	// 		answerOptions: [
	// 			{ answerText: 'Apple', isCorrect: true },
	// 			{ answerText: 'Intel', isCorrect: false },
	// 			{ answerText: 'Amazon', isCorrect: false },
	// 			{ answerText: 'Microsoft', isCorrect: false },
	// 		],
	// 	},
	// 	{
	// 		questionText: 'How many Harry Potter books are there?',
	// 		answerOptions: [
	// 			{ answerText: '1', isCorrect: false },
	// 			{ answerText: '4', isCorrect: false },
	// 			{ answerText: '6', isCorrect: false },
	// 			{ answerText: '7', isCorrect: true },
	// 		],
	// 	},
	// ];

    const [value, setValue] = useState('');
    const [QuestionCounter,setQusetionCounter]=useState(1); //hook for question ctr
    const [CurrentQuestion,setCurrentQuestion]=useState(0); //moving through each question

	const handleNextButton =()=>{
		const nextque=CurrentQuestion+1;
		/* condition for end of questions */
		if(nextque < questions.length)
		{
			setQusetionCounter(QuestionCounter+1);
			setCurrentQuestion(nextque);
			setValue('');
		}else{
			alert("end	")
		}
		
	}

    return(
        

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
                        <Stack direction='column'>
								
								<Radio value='1'> {questions[CurrentQuestion].answerOptions[0].answerText}</Radio>
								<Radio value='2'> {questions[CurrentQuestion].answerOptions[1].answerText}</Radio>
								<Radio value='3'> {questions[CurrentQuestion].answerOptions[2].answerText}</Radio>
								<Radio value='4'> {questions[CurrentQuestion].answerOptions[3].answerText}</Radio>
								

                        </Stack>
                    </RadioGroup>
					<Box textAlign='right'>
						<Button type="submit" variantcolor='teal' color='orange' onClick={()=>handleNextButton()}>  Next</Button>
					</Box>


					
                </Box>
            </Box>
            )}
            
        </Box>


    )
}
export default McqTest;