import React from 'react'
import { P, Code, Comparison, Image, Link } from './elements'

function getComponent(element) {
  switch (element.type) {
    case 'p': return (<P element={element} />)
    case 'code': return (<Code element={element} />)
    case 'comparison': return (<Comparison element={element} />)
    case 'image': return (<Image element={element} />)
    case 'link': return (<Link element={element} />)
  }
}

export default function Element({ element }) {
  const component = getComponent(element)

  return (
    <div className='mt-4'>
      {component}
    </div>
  )
}
