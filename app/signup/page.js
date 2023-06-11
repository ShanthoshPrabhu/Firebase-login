"use client"

import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useRouter} from 'next/navigation'
import {auth}  from '../../firebase'

function Signup() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [emailValid,setEmailValid]=useState(false);
    

 function signUp () {
    console.log(auth)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
         const user = userCredential.user
         router.push('/')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage)
  });
}
    return (
        <div className=' flex justify-center items-center h-screen'>

        <div className=' flex flex-col space-y-6 p-4 w-[360px] '>
            
            {emailValid ? (
                <div className=' w-[100%]'>
                    <label htmlFor="password" className='text-lg'>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className='flex items-center justify-center  w-[100%] bg-[#f2f1ee99] outline-none focus-visible:outline-[#2383e291] rounded-sm text-md px-3 py-2 my-4' id='password' placeholder='Enter your password here ' />
                </div>
            ) : (
                <div  className=' w-[100%]'>
                <label htmlFor="name" className='text-lg'>Name</label>
                <input type="name" id='name' value={name} onChange={e => setName(e.target.value)} className='flex items-center justify-center  w-[100%] bg-[#f2f1ee99] outline-none focus-visible:outline-[#2383e291] rounded-sm text-md px-3 py-2 my-4' placeholder='Enter your name here ' />
                <label htmlFor="email" className='text-lg'>Email</label>
                <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} className='flex items-center justify-center  w-[100%] bg-[#f2f1ee99] outline-none focus-visible:outline-[#2383e291] rounded-sm text-md px-3 py-2 my-4' placeholder='Enter your email address here ' />
            </div>
            ) }
            {emailValid ? (
                <div className='flex items-center justify-center text-[#eb5757] text-md font-semibold bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]'
                onClick={signUp} >Continue with Password</div>
            ) : (
                <div className=' flex items-center justify-center text-[#eb5757] text-md font-semibold bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]' 
                 onClick={()=>{name && email != '' ? setEmailValid(true) : console.warn('Enter your name and email')}}>Continue with name and email</div>
            )}

            <div className='flex items-center justify-center text-md m-4 font-medium text-[#37352fa6] px-3 py-2 cursor-pointer active:text-black'
            onClick={()=>{router.push('/login')}}>Go to login page
            </div>
        </div>
        </div>
    )
}

export default Signup