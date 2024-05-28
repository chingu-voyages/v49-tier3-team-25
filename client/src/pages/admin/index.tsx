import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    
    return (
        <div className='bg-stone-100'>
            <Header/>

            <Sidebar/>
            
            <div className="w-full lg:ps-64">
                <Outlet/>
            </div>
        </div>
        
    )
}

export default Admin
