"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast'


const Stake = () => {

    const handleToast = () => {
        toast.error("Error loading");
    }

  return (
    <div>
        <h1 className='font-semibold cursor-pointer' onClick={handleToast}>Stake</h1>
        <Toaster/>
    </div>
  )
}

export default Stake