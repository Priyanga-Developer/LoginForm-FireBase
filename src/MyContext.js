import { createContext,useState } from "react";
import {auth,googleAuth} from './config/firebase-config';
import { createUserWithEmailAndPassword,signInWithPopup,signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


 const MyContext=createContext({});

 
export const MyContextProvider=({children})=>{

    
    const [email,setEmail]=useState("");
    const[pwd,setPwd]=useState("");
    
    const handleEmailChange=(e)=>{
      setEmail(e.target.value);
   
    }
    const handlePwdChange=(e)=>{
      setPwd(e.target.value);
  
    }

    const navigate=useNavigate();
 

    const signIn= async()=>{
     
      try{
        await createUserWithEmailAndPassword(auth,email,pwd);
        navigate("/Home");
      }
      catch(err){
        console.log(err.message);
      }
    
    }
    const signWithGoogle= async()=>{
      try{
         await signInWithPopup(auth,googleAuth);
         navigate("/Home")
        
      }
      catch(err){
        console.log(err)
      }
    
    
    }
    const logOut= async()=>{
      try{
         await signOut(auth);
         setEmail("");
         setPwd("");
         navigate("/");
      }
      catch(err){
        console.log(err)
      }
    
    }
    
    return(
    <MyContext.Provider value={{email,setEmail,pwd,setPwd,handleEmailChange,handlePwdChange,signWithGoogle,signIn,logOut}}>
        {children}
    </MyContext.Provider>)
}

export default MyContext;