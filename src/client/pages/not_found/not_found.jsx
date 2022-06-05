import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center mt-36'>
      <Typography variant='h1' className='text-center mb-8'>404?</Typography>
      <Typography variant='h3' className='text-center font-normal mx-16 mb-8'>
        We don't know what you're looking for but it does not exists yet...
      </Typography>
      <Link to='/' className='w-fit font-semibold hover:underline text-lg'>Return to Home page</Link>
    </div>
  )
}