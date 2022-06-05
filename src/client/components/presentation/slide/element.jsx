import React from 'react'
import { P, Code, Comparison } from './elements'

function getComponent(element) {
  switch (element.type) {
    case 'p': return (<P element={element}/>)
    case 'code': return (<Code element={element} />)
    case 'comparison': return (<Comparison element={element} />)
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
