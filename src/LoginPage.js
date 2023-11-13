import React, { useContext } from 'react'
import GoogleButton from 'react-google-button';
import DataContext from './MyContext';



const LoginPage = () => {
  const {email,handleEmailChange,handlePwdChange,pwd,signIn,signWithGoogle}=useContext(DataContext);

  return (
    <div className='LoginPage'>
            <form onClick={(e)=>e.preventDefault()} method='POST'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>handleEmailChange(e)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1"className="form-label">Password</label>
                <input type="password" className="form-control"  value={pwd}id="exampleInputPassword1" onChange={(e)=>handlePwdChange(e)}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={signIn} > Submit</button>
            </form>
 <GoogleButton className='googleBtn' onClick={signWithGoogle} />


    </div>
   
  )
}

export default LoginPage