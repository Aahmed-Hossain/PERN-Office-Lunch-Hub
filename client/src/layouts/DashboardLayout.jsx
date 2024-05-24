
import { Outlet } from 'react-router-dom';
import DashboardDrawer from '../components/drawer/DashboardDrawer';
const DashboardLayout = () => {
  return (
    <div>
        <DashboardDrawer/>
        <div className='ml-0 md:ml-[15rem]'>
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout