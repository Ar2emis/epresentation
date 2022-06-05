import React from 'react'
import Code from '../code'

export default function Comparison({ element }) {
  const left = { language: element.language, text: element.left }
  const right = { language: element.language, text: element.right, hidden: element.hidden }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
      <Code element={left} />
      <Code element={right} />
    </div>
  )
}
