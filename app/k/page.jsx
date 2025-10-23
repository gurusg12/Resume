import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <div className='flex justify-center items-center h-screen w-full '> <div className='bg-gray-800 rounded-4xl overflow-hidden h-[200px] w-[300px] border-amber-300 flex gap-7 justify-center items-center flex-col absolute '>
      <a className=' active:scale-95 hover:text-orange-400 text-2xl text-lime-600  font-serif' href="https://amezon-clone-9m8jctmjc-gurusg12s-projects.vercel.app/">Amazon-clone</a>
      <Link href="/blog" className=' active:scale-95 text-2xl hover:text-orange-400 text-lime-600  font-serif' >Blog on Next.JS</Link>

    </div></div>
  )
}

export default page