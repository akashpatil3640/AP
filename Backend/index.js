//import express from 'express'
import express from 'express';
import mongoose from "mongoose";
import routes from "../Backend/routers/routes.js";
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
//using cross origin requests
app.use(cors());
/**Body parser used to get data from url in json format (check again) */
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
const PORT =8000;


app.use(routes); 

const URL="mongodb://localhost:27017/akash";
mongoose.connect(URL,{useNewUrlParser:true ,useUnifiedTopology:true}).then(()=>{
    app.listen(PORT, () => {
        console.log('App listening on port 8000');
    });
}).catch(error => {
    console.log(error.message);
})

    