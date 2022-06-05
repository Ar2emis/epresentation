import React from 'react'
import Link from '../link'

export default function Card({ presentation }) {
  return (
    <div className='rounded border p-4'>
      <h2 className='text-xl font-bold text-gray-800'>{presentation.title}</h2>
      <p className='text-gray-600'>{presentation.description}</p>
      <Link presentation={presentation} className='font-semibold hover:underline'>Read More...</Link>
    </div>
  )
}
