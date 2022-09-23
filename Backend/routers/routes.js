import express from 'express';
import AddStudent from '../controllers/AddStudent.js';
import CodeSubmit from '../controllers/CodeSubmit.js';
import FindStudent from '../controllers/FindStudent.js';
import AddTeacher from '../controllers/AddTeacher.js';
import FindTeacher from '../controllers/FindTeacher.js';

//take routes from express.router
const routes=express.Router(); 
routes.get('/',(req,res)=>{
    res.send("MAin route")
});

routes.post('/RegisterStudent',AddStudent);
routes.post('/CodeSubmit',CodeSubmit);
routes.post('/LoginStudent',FindStudent);
routes.post('/RegisterTeacher',AddTeacher);
routes.post('/LoginTeacher',FindTeacher);


export default routes;
