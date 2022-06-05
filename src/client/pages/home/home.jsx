import React from 'react'
import { Typography } from '@material-tailwind/react'
import { PresentationCard as Card } from '../../components/presentation'
import PRESENTATIONS from '../../data'

export default function Home() {
  const presentations = Object.values(PRESENTATIONS)
  return (
    <div className='flex flex-col content-center mt-36'>
      <Typography variant='h1' className='text-center'>EPresentations</Typography>
      <Typography variant='h3' className='text-center font-normal'>My simple tool for presentations</Typography>
      <div className='mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
        {presentations.map(presentation => (<Card key={presentation.id} presentation={presentation} />))}
      </div>
    </div>
  )
}