
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen">
        <h1 className='text-ceter text-6xl font-extrabold'>404 not found</h1>
        <Link className="px-4 py-2 my-4 text-white font-bold bg-[#11ff15] rounded cursor-pointer" to={'/'}>Go Home</Link>
      </div>
    );
};

export default ErrorPage;