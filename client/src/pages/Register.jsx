import logo from "../assets/images/lunch-hub.png";
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)

  return (
  <div className="lg:px-24 md:px-12 px-4 my-6">

      <div className="py-12 px-4 md:py-6 lg:px-20 md:px-8 flex flex-col bg-gray-100 shadow-lg hover:shadow-xl rounded-md border border-gray-400 ">
      <h1 className="text-center font-extrabold text-4xl mb-0 md:mb-4">Register Please....</h1>
     <div className="flex flex-col md:flex-row items-center justify-around">

         {/* logo Image */}
      <div className=" w-full">
      <img src={logo} className="h-[23rem] w-[23rem] " />
        
      </div>
      {/* login form  */}
      <div className="px-2 w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <TextField
      {...register("name", { required: true })}
          id="outlined-name-input"
          label="Name"
          type="text"
        /> 
         {errors.name && <span className="text-red-500">*Name is required</span>}
         <TextField
      {...register("image", { required: true })}
          id="outlined-image-input"
          label="Image URL"
          type="text"
        /> 
         {errors.email && <span className="text-red-500">*Email is required</span>}
      <TextField
      {...register("email", { required: true })}
          id="outlined-email-input"
          label="Email"
          type="email"
        /> 
         {errors.email && <span className="text-red-500">*Email is required</span>}
      <TextField
      {...register("password", { required: true })}
          id="outlined-password-input"
          label="Password"
          type="password"
        /> 
         {errors.password && <span className="text-red-500">*Password is required</span>}
      <input
      className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-gray-500 hover:bg-gray-600 my-3 cursor-pointer"
      value="Login"
       type="submit" />
    </form> 
    <p className="text-lg font-semibold">Already have account? <Link  to={'/login'} className="hover:underline text-blue-500">Login</Link> please</p>
      </div>
      
     </div>
    </div>
  </div>
  );
};

export default Register