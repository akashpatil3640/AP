import Editor from "@monaco-editor/react";
import MonacoEditor from 'react-monaco-editor';

function CodingTest()
{
    return(
      <MonacoEditor
      width="800"
      height="600"
      language="c"
      theme="vs-dark"
      
    />
    )
}

export default CodingTest;