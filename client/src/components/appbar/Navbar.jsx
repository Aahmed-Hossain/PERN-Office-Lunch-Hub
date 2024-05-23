import { Link } from 'react-router-dom'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-11/12 py-2 bg-white z-10 shadow-sm'>
          <div className='flex flex-row  items-center justify-between gap-3 '>
            {/* Logo */}
            <Link to='/'>
                Home Logo
              {/* <img
                className='w-[4rem] md:w-[8rem] lg:w-[12rem]'
                src={logoImg}
                alt='logo' 
              /> */}
            </Link>
        
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
      </div>
  )
}

export default Navbar