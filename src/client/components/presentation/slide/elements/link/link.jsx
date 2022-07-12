import { default as React, useState } from 'react'

export default function Link({ element }) {
  return (
    <div className={element.center && 'flex justify-center' }>
      <a href={element.href} className='w-fit'>
        <span className='text-base font-semibold hover:underline'>
          {element.text}
        </span>
      </a>
    </div>
  )
}
