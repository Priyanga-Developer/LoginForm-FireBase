import React, { useContext } from 'react'
import MyContext from './MyContext'

const NewPage = () => {
  const {logOut}=useContext(MyContext);
  return (
    <div>NewPage
       <button type="submit" className="btn btn-primary" onClick={logOut} >Log Out</button>
    </div>
  )
}

export default NewPage