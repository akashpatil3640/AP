import TeacherSchema from "../models/TeacherSchema.js";
const FindTeacher=async(req,res)=>{
    const {Email,Password}=req.body;
    console.log("find");
    try{
        if(Email && Password)
        {
            const isTeacherExist=await TeacherSchema.findOne({Email:Email});
            if(isTeacherExist)
            {
                if(isTeacherExist.Password===Password)
                {
                    res.send({"status":"success","message":"welcome"});
                    console.log("find")
                }
                else{
                    res.send({"status":"faild","message":"wrong password!"});
                }
                
            }
            else{
                res.send({"status":"faild","message":"plese signup first"});
            }
        }
        else{
            res.send({"status":"faild","message":"all fields are required"});
        }
        
    }
    catch(err)
    {
        console.log(err.message);
        res.send({"status":"faild","message":err});
    }
}
export default FindTeacher;