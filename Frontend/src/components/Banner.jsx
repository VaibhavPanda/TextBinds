import React from 'react'
import bookbanner from '../../public/bookbanner.png'

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hola Amigos! Discover your next <span className='text-emerald-500'>favourite story</span> here.</h1>
            <p className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut saepe asperiores impedit quam accusantium veritatis ducimus corrupti quos vero nulla, ab, id vitae atque earum!
            </p>
            <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border dark:border-white">
                Email
                <input type="text" className="grow " placeholder="spacedate@site.com" />
            </label>
        </div>
        <button className="btn mt-6 btn-secondary">Get Started</button>
        </div>
        <div className='w-full order-1 md:order-2 md:w-1/2'>
        <img src={bookbanner} className='w-92 h-92' alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner