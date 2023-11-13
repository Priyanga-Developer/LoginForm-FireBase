import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/Login"><button type='button'>signIn</button></Link>
        <Link to="/Signin"><button type='button'>SignUp</button></Link>
    </div>
  )
}

export default Home