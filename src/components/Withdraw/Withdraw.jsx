"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Withdraw = () => {

  const handleToast = () => {
    toast.error("Something went wrong");
  }

  return (
    <div>
      <h1>Amount to Withdraw</h1>
      <input type='text'/>

      <h2 className='font-semibold cursor-pointer ml-10 mt-7' onClick={handleToast}>Withdraw your Stake</h2>
      <Toaster/>
    </div>
  )
}

export default Withdraw
