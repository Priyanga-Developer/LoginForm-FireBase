import React, { useContext } from 'react'
import MyContext from './MyContext'

const NewPage = () => {
  const {logOut,displayName}=useContext(MyContext);
  return (
    <div>
      <h1>Hi {displayName}! your logged in!</h1>
       <button type="submit" className="btn btn-primary" onClick={logOut} >Log Out</button>
    </div>
  )
}

export default NewPage