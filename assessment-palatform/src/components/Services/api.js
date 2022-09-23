import axios from 'axios';
const URL='http://127.0.0.1:8000';

export const RegisterStudent = async (user)=>{
    console.log("aksm"+user);
    
    return await axios.post(`${URL}/RegisterStudent`,user);
}

export const SubmitCode = async(data)=>{
    return axios.post(`${URL}/CodeSubmit`,data)
}

export const LoginStudentAPI=async(user)=>{
    return await axios.post(`${URL}/LoginStudent`,user);
}

export const RegisterTeacher = async (user)=>{
    console.log("aksm"+user);
    
    return await axios.post(`${URL}/RegisterTeacher`,user);
}

export const LoginTeacherAPI=async(user)=>{
    return await axios.post(`${URL}/LoginTeacher`,user);
}