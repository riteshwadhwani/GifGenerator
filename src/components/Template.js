import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'



const Template = ({  image, formtype, setIsLoggedIn}) => {

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>

        <div className='w-11/12 max-w-[450px]' >
            <h1
            className='text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]' 
            >
              Join to Generator Gif 
            </h1>

            <p className='text-[1.125rem] leading[1.625rem] mt-4' >
                <span className='text-richblack-100'>You can generate randomly</span>
                <br/>
                <span className='text-blue-100 italic'> And also your favourite</span>
            </p>

            {formtype === "signup" ? 
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

        </div>

        <div className='relative w-11/12 max-w-[450px] '>
            <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"/>

            <img src={image}
                alt="Students"
                width={558}
                height={490}
                loading="lazy"
                className='absolute -top-4 right-4'
                />    
        </div>

    </div>
  )
}

export default Template
