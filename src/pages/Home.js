import React from 'react'
import BeHappy from "../assets/beHappy.jpg"

const Home = ({isLoggedIn}) => {
  return (
    <div className='flex justify-center items-center '>
    <img src={BeHappy} width={370} height={450} alt='BeHappy' className="border rounded-md shadow-lg shadow-richblack-100"/>
    </div>
  )
}

export default Home
