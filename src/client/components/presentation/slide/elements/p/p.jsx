import { default as React, useState } from 'react'

export default function P({ element }) {
  const [hidden, setHidden] = useState(true)

  return (
    <p>
      <span className={`${element.hidden && hidden ? 'bg-black' : ''}`} onClick={ (_) => setHidden(false) }>
        {element.text}
      </span>
    </p>
  )
}
