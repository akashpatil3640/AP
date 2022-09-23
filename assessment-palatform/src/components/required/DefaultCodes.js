const c = `#include<stdio.h>
int main() {
    // Your Code will come here
    printf("Hello C");
    return 0;
}
`
 const cpp = `#include<bits/stdc++.h> \nusing namespace std;\n\nint main() {\n\t//Your Code will come here\n cout<<"Hello CPP"<<endl;\n\treturn 0;\n}
`

const java = `//Note :-the class name in which main is present should be "test"
import java.lang.*;
import java.util.*;
class test {
    public static void main(String args[]){
        // Your Code will come here
        System.out.println("Hello JAVA");
        
    }
}
`

const python = `# Your code will come here
print('Hello PYTHON')
`

export const code = {
    c, cpp, java, python
}