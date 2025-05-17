import { Button } from '@/components/ui/button'
import React from 'react'
import Image from 'next/image'

function Header() {
    return (
        <div className='px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm'>
            <Image src={'/logo.svg'} alt='logo' width={50} height={50}/>
            <Button className="bg-red-500 hover:bg-black text-white font-semibold py-2 px-4">Get Started</Button>
        </div>
    )
}

export default Header