import React from 'react'
import Button from './button'

export default function Navigation({ page, presentation }) {
  return (
    <footer className='fixed bottom-0 flex flex-row justify-center w-full h-16 bg-white'>
      <div className='flex flex-row justify-center items-center w-full'>
        <Button page={page} forward={false}>Previous</Button>
        <p className='text-center my-auto mx-8'>{page}</p>
        <Button page={page} maxPage={presentation.slides.length}>Next</Button>
      </div>
    </footer>
  )
}
