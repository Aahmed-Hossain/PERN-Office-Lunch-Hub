import { Link, useNavigate } from 'react-router-dom'
import MenuDropdown from './MenuDropdown'
import useAuth from '../../hooks/useAuth.'

const Navbar = () => {
  const navigate = useNavigate();
  const {user, logoutUser} =  useAuth();
  console.log("user from navbar",user)
  const handleLogout = async () => {
    await logoutUser();
    navigate('/login');
  };
  return (
    <div className=' flex justify-between w-full mx-auto py-2 bg-white px-8 border-b'>
          
            {/* Logo */}
            <Link to='/'>
               <h1 className='text-2xl font-extrabold'>Lunch<span className='text-blue-400'>Hub</span></h1>
            </Link>
            <button
          className='bg-fuchsia-200 hover:bg-fuchsia-300 cursor-pointer px-2 py-1 rounded-md hover:shadow-md'
           onClick={handleLogout}>
            Logout
          </button>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
  
  )
}

export default Navbar