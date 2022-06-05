import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Button({ page, maxPage, children, forward = true }) {
  const navigate = useNavigate()
  const onClick = () => { navigate(`?page=${page + (forward ? 1 : -1)}`) }
  const border = page === 1 && !forward || page === maxPage && forward
  const classes = border ? 'bg-black text-white' : 'md:hover:bg-black md:hover:text-white'
  const text = border ? (forward ? 'End' : 'Start') : children

  return (
    <button
      className={`md:border-2 md:border-black w-full h-full md:h-4/5 py-1 px-4 md:w-40 ${classes}`}
      onClick={onClick}
      disabled={border}
    >
      { text }
    </button>
  )
}
