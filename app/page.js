"use client"
import {useRouter} from 'next/navigation'
import { useEffect, useState } from 'react';
import { signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase'

import {auth} from '../firebase'

export default function Home() {

  const router = useRouter();
  const [ user,setUser] = useState([])

  function logout(){
    // const auth = app && getAuth();
    signOut(auth).then(() => {
      setUser([]);
      localStorage.removeItem('user')
      
    }).catch((error) => {
      console.log(error)
    });
     return
  }

  useEffect(() => {
    // const auth = app && getAuth();
    // const userData = auth?.currentUser
    // console.log(userData)
    // setUser(userData)
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData)
    console.log('user',user)
    if(userData){
      const timestamp=userData?.stsTokenManager?.expirationTime
      console.log('timestamp',timestamp)
      const expirationDate = new Date(timestamp); 
      const currentDate = new Date(); 
      if(expirationDate <= currentDate){
        signOut(auth).then(() => {
          setUser([]);
          localStorage.removeItem('user')
        }).catch((error) => {
          console.log(error)
        });
      }
    } else {
      router.push('/login')
    }
    
  }, [])
  console.log('userData',user)
  // console.log('authhh',auth?.currentUser)

  return (
    <div className=' w-screen absolute top-[50%] flex justify-center items-center max-h-screen'>
      {!user?.email ? (
        <div className= ' flex items-center justify-center text-lg'>
        <div className='flex items-center justify-center text-md m-4 font-medium bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]'
        onClick={()=>{router.push('/signup')}}>Signup
        </div>
        <div className='flex items-center justify-center text-md m-4 font-medium bg-[#fdf5f2] px-3 py-2 cursor-pointer active:bg-[#ecd2c9]'
        onClick={()=>{router.push('/login')}}>Login
        </div>
     </div>
      ) : (
        <div className='flex flex-col items-center justify-center text-lg'>
          <div className='flex items-center justify-center text-md m-4 font-medium text-black px-3 py-2 cursor-pointer'>Logged in with <span className='text-green-500 mx-2'>{user?.email}</span></div>
          <div className='flex items-center justify-center text-md m-4 text-[#eb5757] text-md font-semibold px-3 py-2 cursor-pointer active:text-black' onClick={logout}>Logout</div>
        </div>
      )}
    </div>
  )
}
