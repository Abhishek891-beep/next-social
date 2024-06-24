import React from 'react'
import Image from "next/image"

function Stories() {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hide'>
        <div className='flex  gap-8 w-max'>
            {/* story */}
            <div className='flex flex-col   items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>
            {/* story */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>
            {/* story */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>
            {/* story */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>
            {/* story */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>
            {/* story */}
            <div className='flex flex-col items-center gap-2 cursor-pointer'>
                <Image src="https://www.pexels.com/photo/a-woman-in-a-crop-top-and-denim-jeans-touching-her-hair-9320042/" alt = "" width={80} height={80} className= "w-20 h-20 rounded-full ring-2"  ></Image>
                <span className='font-medium'>Ricky</span>
            </div>

        </div>
    </div>
  )
}

export default Stories