import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();


import cPlusPlusExecute from './CompileCPP.js';
import cExecute from './CompileC.js';
import javaExecute from './CompileJava.js';
import pythonExecute from './CompilePython.js';
const CodeSubmit=async(req,res)=>{
    console.log(req.body);
    /**destruction of data */
    const code = req.body.code;
    const language=req.body.language;
    const input=req.body.input;

    
    switch(language)
    {
        case("cpp"): return cPlusPlusExecute(code,input)
            .then(data=>{
                //------------------------RESOLVE() REGION-------------------------
                console.log("SUCCESSFUL PROMISE" );
                console.log("SENDING data to frontend................................@k@sh");
                res.json(data);
                //data sent now delete files
                fs.unlink(path.join(__dirname,'./test.cpp'),(err)=>{
                    if(err)
                        console.log(err)
                    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxexecuting files deleting xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
                });
                fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                    if(err)
                        console.log(err)
                });
                fs.unlink(path.join(__dirname,'./a.out'),(err)=>{
                    if(err)
                        console.log(err)
                });

            }).catch(err=>{
                //-------------------------------REJECT() REGION-------------------------------
                console.log("PROMISE ERROR",err);
                fs.unlink(path.join(__dirname,'./test.cpp'),(err)=>{
                    if(err)
                        console.log(err)
                });
                fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                    if(err)
                        console.log(err)
                });
                fs.unlink(path.join(__dirname,'./a.out'),(err)=>{
                    if(err)
                        console.log(err)
                });
            })

        case("c"):return cExecute(code,input)
        .then(data=>{
            //------------------------RESOLVE() REGION-------------------------
            console.log("SUCCESSFUL PROMISE" );
            console.log("SENDING data to frontend................................@k@sh");
            res.json(data);
            //data sent now delete files
            fs.unlink(path.join(__dirname,'./test.c'),(err)=>{
                if(err)
                    console.log(err)
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx $$ executing files deleting $$ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./a.out'),(err)=>{
                if(err)
                    console.log(err)
            });

        }).catch(err=>{
            //-------------------------------REJECT() REGION-------------------------------
            console.log("PROMISE ERROR",err);
            fs.unlink(path.join(__dirname,'./test.cpp'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./a.out'),(err)=>{
                if(err)
                    console.log(err)
            });
        })

        case("java"):return javaExecute(code,input)
        .then(data=>{
            //------------------------RESOLVE() REGION-------------------------
            console.log("SUCCESSFUL PROMISE" );
            console.log("SENDING data to frontend................................@k@sh");
            res.json(data);
            //data sent now delete files
            fs.unlink(path.join(__dirname,'./test.java'),(err)=>{
                if(err)
                    console.log(err)
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx $$ executing files deleting $$ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./test.class'),(err)=>{
                if(err)
                    console.log(err)
            });

        }).catch(err=>{
            //-------------------------------REJECT() REGION-------------------------------
            console.log("PROMISE ERROR",err);
            fs.unlink(path.join(__dirname,'./test.java'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./test.class'),(err)=>{
                if(err)
                    console.log(err)
            });
        })


        case("python"):return pythonExecute(code,input)
        .then(data=>{
            //------------------------RESOLVE() REGION-------------------------
            console.log("SUCCESSFUL PROMISE" );
            console.log("SENDING data to frontend................................@k@sh");
            res.json(data);
            //data sent now delete files
            fs.unlink(path.join(__dirname,'./test.py'),(err)=>{
                if(err)
                    console.log(err)
                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx $$ executing files deleting $$ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")

            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            // fs.unlink(path.join(__dirname,'./test.class'),(err)=>{
            //     if(err)
            //         console.log(err)
            // });

        }).catch(err=>{
            //-------------------------------REJECT() REGION-------------------------------
            console.log("PROMISE ERROR",err);
            fs.unlink(path.join(__dirname,'./test.py'),(err)=>{
                if(err)
                    console.log(err)
            });
            fs.unlink(path.join(__dirname,'./input.txt'),(err)=>{
                if(err)
                    console.log(err)
            });
            // fs.unlink(path.join(__dirname,'./test.class'),(err)=>{
            //     if(err)
            //         console.log(err)
            // });
        })
    }
}

export default CodeSubmit;