import React from 'react'
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) =>{
        const userInfo = {
          email: data.email,
          password: data.password
        }
        try {
          const res = await axios.post("http://localhost:4001/user/login", userInfo);
          console.log(res.data);
          if (res.data) {
            // alert("Login Successful");
            toast.success("Login Successful");
            document.getElementById("my_modal_3").close();
            setTimeout(()=>{
              window.location.reload();
              localStorage.setItem("Users",JSON.stringify(res.data.user));
            },2000);
          }
        } catch (err) {
          if(err.response){
            console.log(err);
            // alert("Error: " + err.response.data.message);
            toast.error("Error: " + err.response.data.message);
            setTimeout(()=>{},2000);
          }else{
            console.log(err);
            // alert("Error: " + err);
            toast.error("Error: "+err);
            setTimeout(()=>{},2000);
          }
        }
      }
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:border-white"
      onClick={()=> document.getElementById("my_modal_3").close()}
      >✕</Link>
    <h3 className="font-bold text-lg">Login Here</h3>
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
        <span>Password</span><br/>
        <input 
        type="password"
        placeholder='Enter your Password' 
        className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white'
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* Button and text*/}
    <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white cursor-pointer rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p className='px-3 py-1'>Not Registered? <Link to="/signup" className='text-blue-500 underline cursor-pointer hover:text-blue-700'>SignUp</Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login