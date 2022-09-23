import mongoose from "mongoose";
const Schema=mongoose.Schema({
    Email : String,
    Password: String,
    
    
});

const TeacherSchema=mongoose.model('TeacherSchema',Schema);
export default TeacherSchema;