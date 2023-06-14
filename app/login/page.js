"use client"

import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import {useRouter} from 'next/navigation'
import {auth} from '../../firebase'
import { getProviders, signIn } from "next-auth/react";


function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [emailValid,setEmailValid]=useState(false);
    // const [ user,setUser] = useState([])
//

async function signIn () {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user
        // localStorage.setItem('user', JSON.stringify(user));
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
                <label htmlFor="email" className='text-lg'>Email</label>
                <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} className='flex items-center justify-center  w-[100%] bg-[#f2f1ee99] outline-none focus-visible:outline-[#2383e291] rounded-sm text-md px-3 py-2 my-4' placeholder='Enter your email address here ' />
            </div>
            ) }
            {emailValid ? (
                <div className='flex items-center justify-center text-[#eb5757] text-md font-semibold bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]'
                onClick={signIn} >Continue with Password</div>
            ) : (
                <div className=' flex items-center justify-center text-[#eb5757] text-md font-semibold bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]' 
                 onClick={()=>{email != '' ? setEmailValid(true) : null}}>Continue with email</div>
            )}

             <div className='flex items-center justify-center text-md m-4 text-[#37352fa6] font-medium active:text-black px-3 py-2 cursor-pointer'
            onClick={()=>{router.push('/signup')}}>Go to signup page
            </div>

        </div>
        </div>
    )
}

export default Login

