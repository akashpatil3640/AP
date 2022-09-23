import React, {  useState,useRef } from "react";
import Editor from "@monaco-editor/react";
import { Box, Select,SimpleGrid, Heading,Textarea ,Text,Button} from "@chakra-ui/react";
import Nav from '../components/dashboardComponents/Nav';
import Footer from '../components/dashboardComponents/Footer';
/**Local imports */
import { code } from "./required/DefaultCodes";
import { SubmitCode } from "./Services/api";

const initialValues={
  language:"cpp",
  code:`#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n cout<<"Hello CPP"<<endl;\n\treturn 0;\n}`,
  output:"",
  input:" "

}

function CodingTest()
{
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  function showValue() {
    alert(editorRef.current.getValue());
  }


  /** the object sending hook is */
  const [DataObj,SetDataObj]=useState(initialValues);


  /**Language handler */
  const [Language,SetLanguage]=useState('cpp');
  const LangHandler=(e)=>{
    const lang=e.target.value;
      SetLanguage(lang);
      SetDataObj({...DataObj,['language']:lang})

      // console.log(Language);
      // console.log(code[Language]);
      SetCode(code[lang]);

  }
  
  /**Input HAndler */
  let [Input, setInput] = React.useState('')
  let handleInputChange = (e) => {
    let inputValue = e.target.value
    console.log(inputValue);
    setInput(inputValue)
    SetDataObj({...DataObj,[e.target.name]:e.target.value})
    
  }

  /**Code handler */
  const [Code,SetCode]=useState(code[Language]);
  const CodeChangeHandler=(NewCode,e)=>{
      SetCode(NewCode);
      console.log(Code);
     SetDataObj({...DataObj,['code']:NewCode});
     //SetDataObj({...DataObj,['language']:Language});
  }

    /**Run button handler */
  const RunClickHandler = () =>{
    SubmitCode(DataObj).then(res=>{
      console.log(res.data);
      const data= res.data
      if(data.err)
      {
        console.log(data.err);
        SetOutput(data.err);
      }
      else{
        console.log(data.output);
        SetOutput(data.output);
      }
    })
    
    console.log(DataObj);

  }
  const [Output,SetOutput]=useState('output will appear here');
  // const OutputHandler=(e)=>{
  //   SetDataObj({...DataObj,[e.target.name]:e.target.value})
  // }
  
  return (
   <>
   <Nav />
    <button onClick={showValue}></button>
    <Heading>Welcome to IDE</Heading>
    <SimpleGrid columns={2}> 
  
    {/* <Box borderWidth={4} borderRadius={8} boxShadow="sm" mr={10} mt={5}> 
      <Text>Add two numbers</Text>

      <Box mt={7} borderWidth={2} borderRadius={8}  bgColor='grey.50'>
        <Text>Add two integers A and B and show the output on screen not to return the value.</Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </Box>

      <Box my={5} borderWidth={2} borderRadius={8}  bgColor='gray.50'>
        <Text>input:</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>output:</Text>
        <Text>11</Text>
      </Box>

      <Box my={5} borderWidth={2} borderRadius={8}  bgColor='gray.50'>
        <Text>Example-2 with explanation</Text>
        <Text>input:</Text>
        <Text>20</Text>
        <Text>30</Text>
        <Text>output:</Text>
        <Text>50</Text>
      </Box>

      <Box my={5} borderWidth={2} borderRadius={8}  bgColor='gray.50' >
        <Text>Example-3 with explanation</Text>
        <Text>input:</Text>
        <Text>95</Text>
        <Text>15</Text>
        <Text>output:</Text>
        <Text>110</Text>
      </Box>

      <Box borderWidth={2} borderRadius={8}  bgColor='gray.50'>
        <Text>Constraints</Text>
        <Text> {"0<= A <= N"}</Text>
        <Text>{"0<= B <= N"}</Text>
        <Text>{"0<= N <= highest possible range can hold by int"}</Text>
        <Text>Depends upon compiler</Text>
      </Box>

    </Box> */}

    <Box alignContent="center" justifyContent="center" align="center">
      <SimpleGrid columns={6}>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box></Box>
          <Box>
            <Select  value={Language} onChange={(e)=>LangHandler(e)} my={2} name="language">
                
                <option value="cpp">CPP</option>
                <option value="c">C</option>
                <option value="java">JAVA</option>
                <option value="python">PYTHON</option>
            </Select>
          </Box>
          
          
          
      </SimpleGrid>
        
          <Editor
            width="800px"
            height="700px"
            language={Language}
            theme="vs-dark"
            value={Code}
            onMount={handleEditorDidMount}
            onChange={CodeChangeHandler}
            name="code"
          />
          <Box my="10" mx="5">
            <Text align="left" my="5"> Provide Input</Text>
            <Textarea
              value={Input}
              onChange={handleInputChange}
              placeholder='provide input'
              size='lg'
              h={150}
              name="input"
            />
          </Box>

          <Box my="10" mx="5">
            <Text align="left" my="5"> Result</Text>
            <Textarea
              
              
              placeholder=''
              value={Output}
              size='lg'
              isDisabled
              h={150}
              name="output"
            />
            
            <Box align="left" mt={2}>
              <Button
                  isLoading={false}
                  loadingText='Running'
                  colorScheme='teal'
                  variant='outline'
                  spinnerPlacement='end'
                  onClick={RunClickHandler}
              >
                Run Code
              </Button>
        
              {/* <Button 
                colorScheme='teal'
                  variant='outline'
                  ml={2}
                >
                submit
              </Button> */}
            </Box>
          </Box>
          
      </Box>
    </SimpleGrid>
     
     <Footer />
   </>
  );
}

export default CodingTest;