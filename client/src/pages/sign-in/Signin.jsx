import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png";
import axios from "axios";
import voting from "../../assets/voting.png";
import { Navigate } from "react-router-dom";
import SuccessPage from "../../components/SuccessPage";




const Signin = () => {
    const [formData, setFormData] = useState({
      VIN: "",
      phoneNumber: "",
      password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoginSuccess, setIsLoginSuccess] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false); // New state to track redirecting
  
    useEffect(() => {
      if (isLoginSuccess) {
        const redirectTimer = setTimeout(() => {
          setIsRedirecting(true); // Start redirecting after 2.5 seconds
        }, 3000);
  
        return () => clearTimeout(redirectTimer);
      }
    }, [isLoginSuccess]);
  
    const handleTogglePassword = (e) => {
      e.preventDefault();
      setShowPassword(!showPassword);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        const response = await axios.post(
          "https://sectify.onrender.com/api/v1/users/signin",
          formData
        );
  
        if (response.status === 200) {
          console.log("Sign In successful");
          setIsLoginSuccess(true);
          setIsLoading(false);
        } else {
          console.error("Sign In failed");
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
        {isRedirecting ? ( // Conditional rendering for redirecting
            <Navigate to="/user" /> // Replace with the actual home page route
        ) : isLoginSuccess ? (
            <SuccessPage text="Login Successful" /> // Replace with the actual successPage component
        ) : (
        <div className="h-screen flex justify-center items-center" style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat",backgroundSize:"cover", backgroundPosition: "center",
                }}>
            <div className="bg-white w-[90%] md:w-[30%] mx-auto rounded-md md:p-8 p-4">
            <div className="flex flex-col justify-center items-center text-center">
                <img src={logo} alt="logo" />
                <p className="pt-3">Sign up to cast your vote for who you <br /> believe in.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2 mb-12 md:w-full">
                <div className="space-y-2">
                    <div className=" space-y-1">
                        <label htmlFor="text" className="block text-base text-black">VIN</label>
                        <input type="text" name="VIN" id="vin" placeholder="Enter VIN" className="w-full p-2 rounded-md focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
                        value={formData.VIN}
                        onChange={handleChange} 
                        required />
                    </div>

                    <div className=" space-y-1">
                        <label htmlFor="number" className="block text-base text-black">Phone Number</label>
                        <input type="number" name="phoneNumber" id="number" placeholder="Enter Phone Number" className="w-full p-2 rounded-md focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required />
                    </div>

                <div className="pb-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="leading-1 text-base text-black space-y-1">Password</label>
                    <a rel="noopener noreferrer" href="/" className="text-sm hover:underline text-[#009947]">Forgot password?</a>
                </div>
                <div className="relative">
                    <input type={showPassword ? "text" : "password"} 
                    value={formData.password}
                    onChange={handleChange}
                    name="password" 
                    id="password" placeholder="*************" 
                    className="w-full p-2 mb-3 rounded-md focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
                    required />
                <div className="absolute inset-y-0 right-2 flex items-center">
                <button
                    className="outline-none focus:outline-none pb-3 pr-2"
                    onClick={handleTogglePassword}
                >
                    {showPassword ? (
                    <svg width="18x" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path stroke="#009947" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3 18 18"></path><path fill="#009947" fill-rule="evenodd" d="M5.4 6.23c-.44.33-.843.678-1.21 1.032a15.088 15.088 0 0 0-3.001 4.11 1.435 1.435 0 0 0 0 1.255 15.088 15.088 0 0 0 3 4.111C5.94 18.423 8.518 20 12 20c2.236 0 4.1-.65 5.61-1.562l-3.944-3.943a3 3 0 0 1-4.161-4.161L5.401 6.229zm15.266 9.608a15.06 15.06 0 0 0 2.145-3.21 1.435 1.435 0 0 0 0-1.255 15.086 15.086 0 0 0-3-4.111C18.06 5.577 15.483 4 12 4a10.83 10.83 0 0 0-2.808.363l11.474 11.475z" clip-rule="evenodd"></path></g></svg>
                    ) : (
                    <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12c0-2.25 3.75-7.5 10.5-7.5S22.5 9.75 22.5 12s-3.75 7.5-10.5 7.5S1.5 14.25 1.5 12zM12 16.75a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5zM14.7 12a2.7 2.7 0 1 1-5.4 0 2.7 2.7 0 0 1 5.4 0z" fill="#009947"></path></g></svg>
                    )}
                </button>
                </div>
                </div>
                </div>

                <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#009947]'>{isLoading? 'Loading...' : 'Sign In'}</button>
                <p className='text-center px-3'>Don't have an account? {''} <a href="/sign-up" className="text-[#009947] font-bold">
                    Sign Up
                    </a> </p>
                </div>
            </form>
            </div>
        </div>
        )}
        </>
    );
};

export default Signin;

// export const SuccessPage = () => {
//     return (
//       <>
//         <div className="h-screen flex justify-center items-center bg-black bg-opacity-40">
//           <div className="absolute z-10 w-[70%] bg-white rounded-xl md:rounded-2xl h-[40vh] md:h-[50vh] md:w-[40%] border shadow-xl ">
//           </div>
//           <div className='z-20 md:w-[30%] mt-12 md:mt-0'>
//             <div className='flex flex-col items-center justify-center'> 
//               <h2 className='text-xl font-bold text-[#12A768] text-center mx-2'>
//                 Login Successful 
//               </h2>
//               <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M30 3.75C36.9619 3.75 43.6387 6.51562 48.5616 11.4384C53.4844 16.3613 56.25 23.0381 56.25 30C56.25 36.9619 53.4844 43.6387 48.5616 48.5616C43.6387 53.4844 36.9619 56.25 30 56.25C23.0381 56.25 16.3613 53.4844 11.4384 48.5616C6.51562 43.6387 3.75 36.9619 3.75 30C3.75 23.0381 6.51562 16.3613 11.4384 11.4384C16.3613 6.51562 23.0381 3.75 30 3.75ZM26.73 35.1787L20.8988 29.3438C20.6897 29.1347 20.4415 28.9689 20.1684 28.8557C19.8953 28.7426 19.6025 28.6844 19.3069 28.6844C19.0112 28.6844 18.7185 28.7426 18.4454 28.8557C18.1722 28.9689 17.924 29.1347 17.715 29.3438C17.2928 29.7659 17.0556 30.3386 17.0556 30.9356C17.0556 31.5327 17.2928 32.1053 17.715 32.5275L25.14 39.9525C25.3485 40.1626 25.5964 40.3294 25.8697 40.4431C26.1429 40.5569 26.4359 40.6155 26.7319 40.6155C27.0278 40.6155 27.3209 40.5569 27.5941 40.4431C27.8673 40.3294 28.1153 40.1626 28.3237 39.9525L43.6987 24.5737C43.9106 24.3656 44.0791 24.1175 44.1946 23.8439C44.3101 23.5702 44.3703 23.2764 44.3717 22.9794C44.373 22.6824 44.3156 22.3881 44.2027 22.1134C44.0897 21.8387 43.9235 21.5891 43.7136 21.3789C43.5037 21.1688 43.2543 21.0023 42.9797 20.889C42.7052 20.7757 42.4109 20.7179 42.1139 20.719C41.8169 20.72 41.523 20.7798 41.2492 20.895C40.9754 21.0102 40.7272 21.1784 40.5188 21.39L26.73 35.1787Z" fill="#12A768"/>
//               </svg>
  
            
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }