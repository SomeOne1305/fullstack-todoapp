import React from 'react'
import { Outlet } from 'react-router-dom'


const Settings = () => {
  return (
    <div className='bg-light d-flex justify-content-center align-items-center min-vh-100'>
        <Outlet/>
    </div>
  )
}

export default Settings