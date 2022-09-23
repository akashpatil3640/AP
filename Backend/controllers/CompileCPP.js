import fs from 'fs'; //file system from node
import { exec } from 'child_process';
import path from 'path';
const __dirname = path.resolve();

const saveFile=(fileName,data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(fileName,data,(err)=>{
            if(err)
            {
                console.log(err);
                reject();
            }
            else{
                console.log("code successfully saved in test file!!");
                resolve();
            }
        })
    })
}

const cPlusPlusExecute= (data,input)=>{
    const res={
        err:false,
        msg:""

    }

    return new Promise((resolve,reject)=>{
        const fileName="test.cpp";
        saveFile(fileName,data).then(()=>{
            //---------------RESOLVE() region-----------------------------------

            //successfully created the test.cpp file
            //create input.txt file
            fs.writeFile("input.txt",input,function(err){
                if(err)
                {
                    console.log("error while creating the input.txt file for cpp ",err);  
                    reject();
                }
                else
                    console.log("Successfully saved the input.txt file for cpp");
            });

            //creating file path for locate the test.cpp from the root directory so that g++ can find it
            const filePath=path.join(__dirname,"./test.cpp")
            console.log("File path -->"+filePath);

            //err --> error of exec
            //stdout -->output of command
            //stderr --> error of the command
            exec('g++ '+filePath,(err,stdout,stderr)=>{
                if(err)
                {
                    console.log("error of exec call",err);
                    //giving data back to promise (handled in CodeSubmit.js file ) data is distructed in CodeSubmit file
                    resolve({
                        err:stderr,
                        output:err,
                        error:stderr
                    })
                }

                console.log("SUCCESSFULLY COMPILED!!");
                //supply input to executable file

                exec('./a.out < '+'input.txt',(err,stdout,stderr)=>{
                    if(err){
                        console.log("error while executing /.out file!! "+err);
                        resolve({
                            err:true,
                            output:err,
                            error:stderr
                        })
                    }
                    //compiled successfully
                    //console.log("OUTPUT",stdout);
                    resolve({
                        err:false,
                        output:stdout
                    })
                })

                

            })





        }).catch(()=>{
            //----------------------------reject() region-----------------------------------
            console.log("Error while saving file");
            const err={
                err:true,
                output:"LAvdya OS chi permission check kr mag tond ghevun ye!!"
            };
            resolve(err);
        })
    })
}






//export const execute={cPlusPlusExecute};
export default cPlusPlusExecute;
