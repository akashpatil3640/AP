import mongoose from "mongoose";
const Schema=mongoose.Schema({
    Date : Date,
    

    
});

const PaperSchema=mongoose.model('PaperSchema',Schema);
export default PaperSchema;