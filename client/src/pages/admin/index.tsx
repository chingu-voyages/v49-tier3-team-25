import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Dashboard from './dashboard'

const Admin = () => {
  return (
  <div className='bg-stone-100'>
    <Header/>

    <Sidebar/>
    
    <div className="w-full lg:ps-64">
        <Dashboard/>
    </div>
  </div>
    
  )
}

export default Admin
