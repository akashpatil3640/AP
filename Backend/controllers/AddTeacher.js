import TeacherSchema from "../models/TeacherSchema.js";
const AddTeacher=async(req,res)=>{
    const {Email,Password}=req.body;
   

   console.log(Email);
   console.log(Password,Password);

  // if(Email.includes('@')===false && Email.includes(".")===false)
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)===false)

    {
        res.send({"status":"faild","message":"Plese enter correct Email"});

    }
  else if(Email && Password )
   {
       console.log("hiii")
       const isTeacherExist=await TeacherSchema.findOne({Email:Email});
       if(isTeacherExist)
       {
           console.log("present")
           //console.log(isStudentExist)
           res.send({"status":"faild","message":"user already present"});
       }
       else
       {
           console.log("absent")
           const teacher=req.body;
           const newTeacher=TeacherSchema(teacher);
           try{
               await newTeacher.save();
               res.send({"status":"success","message":"successfully regester"});
           }catch(error){
               console.log(error.message);
               res.send({"status":"faild","message":"unable to register"});
           }
       }
   }
}

export default AddTeacher;