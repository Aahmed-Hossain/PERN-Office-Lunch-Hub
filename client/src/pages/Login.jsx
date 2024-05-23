import logo from "../assets/images/lunch-hub.png";
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)

  return (
  <div className="px-24 my-6">

      <div className="py-12 px-20 flex flex-col bg-gray-100 shadow-lg hover:shadow-xl rounded-md border border-gray-400">
      <h1 className="text-center font-extrabold text-4xl">Login Please....</h1>
     <div className="flex items-center justify-around">

         {/* logo Image */}
      <div className=" w-full">
      <img src={logo} className="h-[23rem] w-[23rem] " />
        
      </div>
      {/* login form  */}
      <div className="px-2  w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
    <p className="text-lg font-semibold">New to this Site? <Link  to={'/register'} className="hover:underline text-blue-500">Register</Link> please</p>
      </div>
      
     </div>
    </div>
  </div>
  );
};

export default Login;