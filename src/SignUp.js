import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc ,collection} from 'firebase/firestore';
import { db } from './config/firebase-config';
import { auth } from './config/firebase-config';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();

  const registerWithEmailAndPassword= async()=>{
    try{
     const response= await createUserWithEmailAndPassword(auth,email,password)
     const user=response.user;
     await updateProfile(user,{
        displayName:name,
     })
    console.log(response.user)
     await addDoc(collection(db, "users"), {
      uid: user.uid,
      username:user.displayName,
      authProvider: "local",
      email:email,
    });
    navigate("/newpage")

  
    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div className='signInPage'>
      <h1>SignUp</h1>
      <form onSubmit={(e)=>e.preventDefault()} method='POST'>
                    <div className="input-group mb-3">
                      <span className="input-group-text" id="basic-addon1">@</span>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                      htmlFor="username" 
                      value={name}
                      aria-describedby="basic-addon1"
                      onChange={(e)=>setName(e.target.value)}
                    />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}  />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1"className="form-label"> Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"
                        
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={()=>registerWithEmailAndPassword()} > Submit</button>
            </form>
    </div>
  )
}

export default SignUp