import React from 'react'
import { Typography } from '@material-tailwind/react'
import Element from './element'

export default function Slide({ slide }) {
  return (
    <div className='mt-8 mb-20 mx-8 md:mx-16 min-h-[83vh] flex flex-col justify-center overflow-scroll'>
      { 
        slide.title && <div className='flex flex-col content-center'>
          <Typography variant='h1' className='text-center'>{slide.title}</Typography>
        </div>
      }
      { slide.body?.map((element, index) => <Element key={`${element.type}-${index}`} element={element} />) }
    </div>
  )
}
