// this is the landing page
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Enter = () => {

  return (
    <div className='main-div'>
    <div className="enter-button">
      {/* button to go to the home page */}
    <Link to="/home" className="home-button">ENTER</Link>
   </div>
   </div>
  )
}

export default Enter
