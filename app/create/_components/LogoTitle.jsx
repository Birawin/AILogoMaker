"use client"
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LogoTitle({ onHandleInputChange }) {

  const searchParams = useSearchParams();
  const [title, setTitle] = useState(searchParams.get('title')??'')

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
    const params = new URLSearchParams(searchParams);
    params.set('title', value);
    router.push(`/create?${params.toString()}`);
  }

  return (
    <div className='my-10 border-b border-gray-700 pb-10 '>
        <HeadingDescription 
        title={Lookup?.LogoTitle} 
        description={Lookup?.LogoTitleDesc}
        />
        <input type='text' placeholder={Lookup.InputTitlePlaceholder} className = 'p-4 border rounded-xl mt-7 w-full' defaultValue={title} onChange={handleTitleChange}/>
    </div>
  )
}