import React from 'react'
import HeadingDescription from './HeadingDescription';
import Lookup from '@/app/_data/Lookup';

function LogoDesc({onHandleInputChange}) {
  return (
    <div className='my-10 border-b border-gray-700 pb-10'>
      <HeadingDescription 
      title={Lookup.LogoDescTitle}
      description={Lookup.LogoDescDescription}
      />
      <input 
      type='text'
      placeholder={Lookup.InputDescPlaceholder}
      className='p-4 border rounded-xl mt-7 w-full'
      onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  )
}

export default LogoDesc;