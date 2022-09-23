import StudentSchema from "../models/StudentSchema.js";
const AddStudent= async(req,res)=>
{
    const {Email,Password,ConfirmPassword}=req.body;
   
   console.log(Email);
   console.log(Password,Password);

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)===false)

    {
        res.send({"status":"faild","message":"Plese enter correct Email"});

    }
  else if(Email && Password && ConfirmPassword)
   {
       const isStudentExist=await StudentSchema.findOne({Email:Email});
       if(isStudentExist)
       {
           console.log("present")
           //console.log(isStudentExist)
           res.send({"status":"faild","message":"user already present"});
       }
       else
       {
           console.log("absent")
           const student=req.body;
           const newStudent=StudentSchema(student);
           try{
               await newStudent.save();
               res.send({"status":"success","message":"successfully regester"});
           }catch(error){
               console.log(error.message);
               res.send({"status":"faild","message":"unable to register"});
           }
       }
   }
}
    
       

export default AddStudent;