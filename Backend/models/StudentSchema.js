import mongoose from "mongoose";
const Schema=mongoose.Schema({
    Email : String,
    Password: String
    
});

const StudentSchema=mongoose.model('StudentSchema',Schema);
export default StudentSchema;