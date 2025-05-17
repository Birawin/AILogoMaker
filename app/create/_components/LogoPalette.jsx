"use client"
import React from 'react'
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';
import Colours from '@/app/_data/Colours';
import { useState } from 'react';

function LogoPalette({onHandleInputChange}) {

  const [selectedPalette, setSelectedPalette] = useState();
  return (
    <div className='my-10 border-b border-gray-700 pb-10'>
      <HeadingDescription
        title={Lookup.LogoPaletteTitle}
        description={Lookup.LogoPaletteDescription}
      />
      <div className='grid grid-cols-2 grid-rows-3 gap-5 mt-5'>
        {Colours.slice(0, 6).map((palette, paletteIdx)=> (
          <div
            className={`flex flex-row gap-2 cursor-pointer${selectedPalette === palette.name ? ' border-2 border-black' : ''}`}
            key={paletteIdx}
          >
            {palette.colors.map((item, colorIdx)=> (
                <div
                  key={colorIdx}
                  onClick={()=>{
                    setSelectedPalette(palette.name);
                    onHandleInputChange(palette.name)
                  }}
                  className='h-24 w-full rounded shadow border'
                  style={{ backgroundColor: item }}
                />
              ))}
            </div>
        ))}
      </div>
    </div>
  )
}

export default LogoPalette;
