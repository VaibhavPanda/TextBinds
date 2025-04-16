import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>We'll get to you <span className='text-pink-500'>soon!!</span></h1>
        <div className='flex items-center justify-center'>
        <div className='border-[2px] shadow-md rounded-2xl w-[600px] mt-4 px-3 py-1 pb-4'>
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
    {/* Name Input */}
    <div className='mt-4 space-y-2'>
        <span>Name</span><br/>
        <input 
        type="text" 
        placeholder='Enter your Name' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("name", { required: true })}
        />
        <br/>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Email Input */}
    <div className='mt-4 space-y-2'>
        <span>Email</span><br/>
        <input 
        type="email" 
        placeholder='Enter your Email' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Password Input */}
    <div className='mt-4 space-y-2'>
        <span>Contact</span><br/>
        <input 
        type="tel" 
        placeholder='Enter your Contact' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("tel", { required: true })}
        />
        <br/>
        {errors.tel && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button and text*/}
    <div className='flex justify-around mt-4'>
        <Link to="/">
        <button className='bg-pink-500 mt-6 text-white cursor-pointer rounded-md px-4 py-2 hover:bg-pink-700 duration:200'>{`<-`}Back</button>
        </Link>
        <button className='bg-pink-500 mt-6 text-white cursor-pointer rounded-md px-4 py-2 hover:bg-pink-700 duration-200'>Submit</button>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Contact