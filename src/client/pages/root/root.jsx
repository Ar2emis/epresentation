import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../../components/header'
import presentations from '../../data'

export default function Root() {
  return (
    <div>
      <Header presentations={presentations}/>
      <Outlet />
    </div>
  )
}