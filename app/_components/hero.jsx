"use client"
import React, { useState, useEffect } from 'react'
import Lookup from '../_data/Lookup'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function Hero() {
  const [logoTitle, setLogoTitle] = useState();
  const [isGenerating, setIsGenerating] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check if we're on the create page by looking for the title parameter
    const title = searchParams.get('title');
    if (title) {
      setIsGenerating(true);
    }
  }, [searchParams]);

  const handleGenerate = () => {
    setIsGenerating(true);
  };

  if (isGenerating) {
    return null; // This will hide everything when generating
  }

  return (
    <div className='flex items-center mt-32 flex-col gap-5'>
      <h2 className='text-red-500 text-6xl text-center font-bold'>{Lookup.HeroHeading}</h2>
      <h2 className='text-2xl text-center font-bold'>{Lookup.HeroSubheading}</h2>
      <p className='text-lg text-gray-400 text-center'>{Lookup.HeroDesc}</p>

      <div className='flex flex-col md:flex-row justify-center gap-4 w-full max-w-2xl items-center p-1'>
        <input placeholder={Lookup.InputTitlePlaceholder}
        className='p-3 border rounded-md w-full shadow-md'
        onChange={(event)=>setLogoTitle(event?.target.value)}
        />
        <Link href={'/create?title='+logoTitle} className="w-full md:w-auto" onClick={handleGenerate}>
          <Button className="w-full text-lg md:text-base md:text-white py-6 px-8 max-w-2xl md:py-4 md:px-6 hover:bg-red-500 shadow-md">Generate</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero