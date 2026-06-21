// import React from "react"
// import { useState , useEffect } from "react"
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs";
// import { useForm } from "react-hook-form";
// const SignUp = () => {
//   const navigate=useNavigate()
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [username, setUsername] = useState("");
//   const buttonHandler=()=>{
    
//     const users=JSON.parse(localStorage.getItem("users")) || [];
//     const existingUser=users.find((user)=>user.email===email);
//     if(existingUser){
//       alert("User with this email already exists. Please sign in.");
//       return;
//     }
//     const salt = bcrypt.genSaltSync(10);
//     const hashedPassword=bcrypt.hashSync(password, salt);
    
    
//     const newuser={email, password:hashedPassword, phoneNumber , username}
//     users.push(newuser)
//     localStorage.setItem("users" , JSON.stringify(users))
//     alert("Sign up successful! Please sign in.");
//     navigate("/signin")
//   }
//   return (
//     <div className="m-auto min-h-screen flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 p-4">
      
//       {/* Form Section */}
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:mr-8">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign Up</h1>
//         <p className="mb-6 text-gray-600">
//           Already have an account?{" "}
//           <Link 
//           to="/signIn" 
//           className="text-blue-600 hover:underline">
//             Sign In
//           </Link>
//         </p>

//         <form className="flex flex-col space-y-4"  onSubmit={buttonHandler}>
//           <div className="flex flex-col">
//             <label htmlFor="email" className="mb-1 text-gray-700">Email:</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={email}
//               onChange={(e)=>setEmail(e.target.value)}
//               className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="flex flex-col">
//             <label htmlFor="password" className="mb-1 text-gray-700">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               required={true}
//               onChange={(e)=>setPassword(e.target.value)}
//               className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="Phone Number" className="mb-1 text-gray-700">Phone Number:</label>
//             <input
//               type="tel"
//               id="number"
//               name="PhoneNumber"
//               required={true}
//               value={phoneNumber}
//               onChange={(e)=>setPhoneNumber(e.target.value)}
//               className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="flex flex-col">
//             <label htmlFor="username" className="mb-1 text-gray-700">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               required= {true}
//               value={username}
//               onChange={(e)=>setUsername(e.target.value)}
//               className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             to="/"
//             type="submit"
//             className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
           
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>

//       {/* Image Section */}
     
//     </div>
//   );
// };

// export default SignUp;

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
const SignUp = () => {
  const {register, handleSubmit, formState:{errors}}=useForm({mode:"onChange"});
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const buttonHandler=(data)=>{
    const {email, password, phoneNumber, username}=data;
    
    // const users=JSON.parse(localStorage.getItem("users")) || [];
    // const existingUser=users.find((user)=>user.email===email);
    // if(existingUser){
    //   alert("User with this email already exists. Please sign in.");
    //   return;
    // }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword=bcrypt.hashSync(password, salt);
    const userData ={
      id : crypto.randomUUID(),
      email : email,
      password : hashedPassword,
      phoneNumber: phoneNumber,
      username: username

    }
    dispatch(addUser(userData))
     alert("Sign up successful! Please sign in.");
    navigate("/signin")
    
    // const newuser={email, password:hashedPassword, phoneNumber , username}
    // users.push(newuser)
    // localStorage.setItem("users" , JSON.stringify(users))
   
  }
  return (
    <div className="m-auto min-h-screen flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 p-4">
      
      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md md:mr-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign Up</h1>
        <p className="mb-6 text-gray-600">
          Already have an account?{" "}
          <Link 
          to="/signIn" 
          className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>

        <form className="flex flex-col space-y-4"  onSubmit={handleSubmit(buttonHandler)}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">Email:</label>
            <input
            className={`${errors.email ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
             type="email"
             name="email"
             placeholder="Enter your email"
             {...register("email",{required:"Email is required",
              pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message:"Enter a valid email address",
                mandatory:true
              }

             })}
              
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700">Password:</label>
            <input
            className={`${errors.password ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="password"
              placeholder="Enter your password"
              {...register("password",{required:"password is required",
                minLength:{
                  value:8,
                  message:"Password must be at least 8 characters long",
                  mandatory:true
                }
              })}
              
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="Phone Number" className="mb-1 text-gray-700">Phone Number:</label>
            <input
            className={`${errors.phoneNumber ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="tel"
              placeholder="Enter your phone number"
              {...register("phoneNumber",{required:"Phone number is required",
                pattern:{
                  value:/^\d{11}$/,
                  message:"Enter a valid 11-digit phone number",
                  mandatory:true
                }
              })}
          
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-gray-700">Username:</label>
            <input
            className={`${errors.username ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="text"
              placeholder="Enter your username"
              {...register("username",{required:"Username is required",
                minLength:{
                  value:3,
                  message:"Username must be at least 3 characters long"
                }
              })}
          
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
          </div>
         

          <button
            
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
           
          >
            Sign Up
          </button>
        </form>
      </div>

    </div>
  );
};

export default SignUp;