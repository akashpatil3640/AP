import axios from 'axios';
const URL='http://127.0.0.1:8000';

export const RegisterStudent = async (user)=>{
    console.log("aksm"+user);
    
    return await axios.post(`${URL}/RegisterStudent`,user);
}