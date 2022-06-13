import { default as React, useState } from 'react'

export default function P({ element }) {
  const [hidden, setHidden] = useState(element.hidden)
  const hide = (_) => setHidden(false)

  return (
    <p className={element.center && 'flex justify-center' }>
      <span className={`text-base ${hidden ? 'bg-black' : ''}`} onClick={ hide }>
        {element.text}
      </span>
    </p>
  )
}
