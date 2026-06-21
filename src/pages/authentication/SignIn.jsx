import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { signInUser } from "../../store/userSlice";

const SignIn = () => {
  const dispatch=useDispatch()
  const selector=useSelector((store)=>store.user.users)
  const {setLoggedInStatus , setLogin}=useOutletContext()
  const navigate=useNavigate()
  
 const {register , handleSubmit , formState:{errors}}=useForm({mode:"onChange"});
  const onSubmit=(data)=>{
    const {email , password}=data
    
    // const loggedInStatus =localStorage.getItem("loggedInStatus")==="true";
    // if(loggedInStatus){
    //   alert("You are already logged in. Redirecting to home page.");
    //  navigate("/")
    // }
    
   
    const existingUser=selector.find((user)=>user.email===email)
    if(existingUser){
     const passwordMatch=bcrypt.compareSync(password, existingUser.password)
    if(passwordMatch){
     alert("Sign in successful!");
     navigate("/")
     setLoggedInStatus(true)
     setLogin(false)
     dispatch(signInUser(existingUser))
     }
      else{
        alert("Incorrect password. Please try again.");
      }
    }
    else{
      alert("User does not exist")
    }
    

    
      
      
      


  }
  
  return (
    <div className="m-auto max-h-screen flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 p-4 ">
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md w-200">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h1>
      <p className="mb-6 text-gray-600"></p>
      <p> Don't have an account? :  
      <Link to="/signUp" className="text-blue-600 hover:underline">
      <span>  Sign Up</span>
      </Link></p>
    <form className="flex flex-col space-y-4 " onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-700">Email:</label>
            <input
            className={`${errors.email ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
             type="email"
             name="email"
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
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-700">Password:</label>

            <input
            className={`${errors.password ? "border-red-500" : "border-gray-300"} border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              type="password"
              name="password"
              {...register("password",{required:"Password is required",
                minLength:{
                  value:8,
                  message:"Password must be at least 8 characters long",
                  mandatory:true
                }
              })}
             
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
          </div>

         

          

          <button 
            
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
           
          >
            Sign In
          </button> 
        </form>
     </div>
     </div>
     
  );
}

export default SignIn;






// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useState , useEffect } from "react"
// import { useNavigate } from "react-router-dom";
// import bcrypt from "bcryptjs";

// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate=useNavigate()
 
//   const buttonHandler=()=>{
    
//     const loggedInStatus =localStorage.getItem("loggedInStatus")==="true";
//     if(loggedInStatus){
//       alert("You are already logged in. Redirecting to home page.");
//      navigate("/")
//     }
    
//     const users=JSON.parse(localStorage.getItem("users"))
//     const existingUser=users.find((user)=>user.email===email)
//     if(!existingUser){
//       alert("No user found with this email. Please sign up.");
//       return;
//     }
//     const passwordMatch=bcrypt.compareSync(password, existingUser.password)
//     if(passwordMatch){
//      alert("Sign in successful!");
//      localStorage.setItem("loggedInStatus", "true");
//      localStorage.setItem("currentUser",JSON.stringify(existingUser))
//      navigate("/")
    
//      }
//       else{
//         alert("Incorrect password. Please try again.");
//       }


//   }
  
//   return (
//     <div className="m-auto max-h-screen flex flex-col md:flex-row items-center justify-center w-full bg-gray-100 p-4 ">
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md w-200">
//       <h1 className="text-3xl font-bold mb-4 text-gray-800">Sign In</h1>
//       <p className="mb-6 text-gray-600"></p>
//       <p> Don't have an account? :  
//       <Link to="/signUp" className="text-blue-600 hover:underline">
//       <span>  Sign Up</span>
//       </Link></p>
//     <form className="flex flex-col space-y-4 " onSubmit={buttonHandler}>
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
//               required
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//               className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

         

          

//           <button 
//             to="/"
//             type="submit"
//             className="mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
           
//           >
//             Sign In
//           </button> 
//         </form>
//      </div>
//      </div>
     
//   );
// }

// export default SignIn;