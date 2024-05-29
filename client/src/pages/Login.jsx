import logo from "../assets/images/lunch-hub.png";
import { useForm } from "react-hook-form"
import TextField from '@mui/material/TextField';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth.";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useAuth();
  const [autoFill, setAutoFill] = useState({email: '', password: ''});
console.log("from upper", autoFill);
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({
        defaultValues: {
          email: autoFill.email,
          password:autoFill.password
        },
      })
      const onSubmit = (data) => {
        // console.log("user:",data);
        const user = {
          email: data.email,
          password: data.password,
  
        };
        // console.log(user);
        useAxios
          .post("/auth/login", user)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            console.log("user data and token:",res.data);
            setUser(res.data.userInfo);
            reset();
            toast.success("You Loggedin successful");
            navigate(location.state?.from || "/");
          })
          .catch((err) => {
            console.error("Errors:", err);
            if (err.response) {
              toast.error(`${err.response.status}: ${err.response.data}`);
              // console.error("Error data:", err.response.data);
              // console.error("Error status:", err.response.status);
              // console.error("Error headers:", err.response.headers);
            }
          });
      };
      const handleAutoFill = (email, password)=> {
        setAutoFill(email,password)
        setValue('email', email);
        setValue('password', password);
        setValue(email);
        setValue(password); 
        
        // console.log(email, password);
      }
  return (
  <div className="lg:px-24 md:px-12 px-4 my-6">

      <div className="py-12 px-4 md:py-6 lg:px-20 md:px-8 flex flex-col bg-gray-100 shadow-lg hover:shadow-xl rounded-md border border-gray-400 ">
      <h1 className="text-center font-extrabold text-4xl">Login Please....</h1>
     <div className="flex flex-col md:flex-row items-center justify-around">

         {/* logo Image */}
      <div className=" w-full">
      <img src={logo} className="h-[23rem] w-[23rem] " />
        
      </div>
      {/* login form  */}
      <div className="px-2 w-full">
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
          defaultValue={autoFill.password}
        /> 
         {errors.password && <span className="text-red-500">*Password is required</span>}
      <input
      className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-gray-500 hover:bg-gray-600 my-3 cursor-pointer"
      value="Login"
       type="submit" />
    </form>
    <button onClick={()=> handleAutoFill('ahmed.hsn.404@gmail.com','ahmed404')} className=" py-2 px-4 w-full rounded text-white font-bold text-lg bg-slate-500 hover:bg-gray-600 my-3 cursor-pointer">
Login as Admin
    </button>
    <p className="text-lg font-semibold">New to this Site? <Link  to={'/register'} className="hover:underline text-blue-500">Register</Link> please</p>
      </div>
      
     </div>
    </div>
  </div>
  );
};

export default Login;
