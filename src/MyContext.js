import { createContext,useEffect,useState } from "react";
import {auth,googleAuth} from './config/firebase-config';
import { signInWithEmailAndPassword,signInWithPopup,signOut,onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


 const MyContext=createContext({});

 
export const MyContextProvider=({children})=>{

    
    const [email,setEmail]=useState("");
    const[pwd,setPwd]=useState("");
    const[error,setError]=useState({});
    const [user,setUser]=useState("");
    // const[isCorrect,setIsCorrect]=useState(false);
    const [isSubmit,setIsSubmit]=useState(false);


    
    const handleEmailChange=(e)=>{
      setEmail(e.target.value);
   
    }
    const handlePwdChange=(e)=>{
      setPwd(e.target.value);
  
    }

    const navigate=useNavigate();
    const displayName=auth?.currentUser?.displayName;
    const signIn= async()=>{
  
     setError(validate(email,pwd))
      try{
        setIsSubmit(true);
        await signInWithEmailAndPassword(auth,email,pwd);
       
        navigate("newpage");
      
      }
      catch(err){
        if(isSubmit){
          setError({general:"Email or password did not match"})
          console.log(err);
        }
      
      }
    
    }
    const validate=()=>{
      let err={}
      const regex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

       if(!email && !pwd){
          err.general="please fill all the fields";
       }
       else if(!pwd){
         err.password="please fill password"
       }
       else if(!regex.test(email)){
        err.email="please enter the valid email"
       }
       else if(pwd.length<6){
        err.password="Password should atleast 6 characters"
       }
     
      return err;
    }
    const signWithGoogle= async()=>{
      try{
         await signInWithPopup(auth,googleAuth);
         navigate("/newpage")
        
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

    useEffect(()=>{
          const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            
          })
          return ()=>{
            unsubscribe();
          }
    },[]);
    console.log(user)
    
    return(
    <MyContext.Provider value={{email,setEmail,pwd,setPwd,handleEmailChange,handlePwdChange,signWithGoogle,signIn,logOut,displayName,error,user}}>
        {children}
    </MyContext.Provider>)
}

export default MyContext;