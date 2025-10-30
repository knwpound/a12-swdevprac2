'use client'
import Image from "next/image";
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";

export default function Banner() {
  const { data: session } = useSession();
  const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg']
    const [index, setIndex] = useState(0)
    const router = useRouter()
  return (
    <div className="w-[100vw] h-[70vh] relative block" 
    onClick={()=>setIndex(index+1)}>
      <Image
        src={covers[index%4]}
        alt="Banner"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className="relative top-[40%] text-center text-white">
        {session ? <div className="z-30 font-medium text-white text-lg">Welcome {session.user?.name}</div> : null}
        <h1 className="text-3xl text-shadow-lg font-semibold tracking-wider">where every event finds its venue</h1>
        <h3 className="text-shadow-lg">Your perfect place for parties, weddings, and celebrations</h3>
      </div>
      <button className='bg-white
            font-bold font-mono py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-red-100 '
            onClick={(e)=>{e.stopPropagation();router.push('/venue')}}>
                Select Venue
            </button>
    </div>
  );
}
