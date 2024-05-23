import { Link } from 'react-router-dom'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className=' flex justify-between w-full mx-auto py-2 bg-white px-8 border-b'>
          
            {/* Logo */}
            <Link to='/'>
               <h1 className='text-2xl font-extrabold'>Lunch<span className='text-blue-400'>Hub</span></h1>
            </Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
  
  )
}

export default Navbar