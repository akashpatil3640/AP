import StudentSchema from "../models/StudentSchema.js";
const FindStudent=async(req,res)=>{
    const {Email,Password}=req.body;
    console.log("find");
    try{
        if(Email && Password)
        {
            const isStudentExist=await StudentSchema.findOne({Email:Email});
            if(isStudentExist)
            {
                if(isStudentExist.Password===Password)
                {
                    res.send({"status":"success","message":"welcome"});
                    console.log("find")
                }
                else{
                    res.send({"status":"faild","message":"wrong password"});
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
export default FindStudent;