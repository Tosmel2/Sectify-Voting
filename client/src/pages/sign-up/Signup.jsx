import React, {useState, useEffect} from "react";
import logo from "../../assets/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import voting from "../../assets/voting.png";
import { Navigate } from "react-router-dom";
import SuccessPage from "../../components/SuccessPage";




const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
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
          "https://sectify.onrender.com/api/v1/users/signup",
          formData
        );
  
        if (response.status === 200) {
          console.log("Registration successful");
          setIsLoginSuccess(true);
          setIsLoading(false);
        } else {
          console.error("Registration failed");
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    // const handleTogglePassword = (e) => {
    //     e.preventDefault();
    //     setShowPassword(!showPassword);
    //   };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     setIsLoading(true);
    //     try {
    //         const response = await axios.post("http://localhost:8000/api/v1/users/signup", formData);
    //         // localStorage.setItem("token", response.data.token);
    //         // localStorage.setItem("user", JSON.stringify(response.data.user));
    //         if (response.status === 200) {
    //             console.log('Registration successful')

    //             // Redirect to the signin page after 3 seconds
    //             const redirectTimer = setTimeout(() => {
    //                 window.location.href = "/sign-in";
    //             }, 10000);

    //             return () => clearTimeout(redirectTimer);
    //             // window.location.href = "/";
                
    //         } else {
    //             console.error('Registration failed');
    //         }
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
        {isRedirecting ? ( // Conditional rendering for redirecting
            <Navigate to="/sign-in" /> // Replace with the actual home page route
        ) : isLoginSuccess ? (
            <SuccessPage text="Registration Successful" /> // Replace with the actual successPage component
        ) : (
        <div className="h-screen flex justify-center items-center" style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat",backgroundSize:"cover", backgroundPosition: "center",
                }}>
            <div className="bg-white w-[90%] md:w-[35%] mx-auto rounded-md md:px-8 md:py-4 p-4">
            <div className="flex flex-col justify-center items-center">
                <img src={logo} alt="logo" />
                <h3 className="pt-3">Sign up to cast your vote for who you</h3>
                <p>believe in.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-2 mb-12 md:w-full">
                <div className="space-y-2">
                    <div className="">
                      <label htmlFor="fullname" className="block text-md text-black">Full Name</label>
                      <input type="text" name="fullname" id="text" placeholder="Enter Full Name" className="w-full p-2 rounded-md focus:outline-none pl-4 border-gray-400 border bg-white"
                      value={formData.fullname}
                      onChange={handleChange}
                       required />
                    </div>

                    <div className="">
                        <label htmlFor="email" className="block text-md text-black">Email <span className="text-gray-500 text-sm">(Optional)</span></label>
                        <input type="email" name="email"  placeholder="Enter Email" className="w-full p-2 rounded-md focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
                        value={formData.email}
                        onChange={handleChange}
                         />
                    </div>

                    <div className="">
                        <label htmlFor="number" className="block text-md text-black">Phone Number</label>
                        <input type="number" name="phoneNumber" id="number" placeholder="Enter Phone Number" className="w-full p-2 rounded-md focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required />
                    </div>

                <div className="pb-2">
                <div className="flex justify-between items-center">
                    <label htmlFor="password" className="leading-1 text-md text-black">Password</label>
                    <a rel="noopener noreferrer" href="/" className="text-xs hover:underline text-white">Forgot password?</a>
                </div>
                <div className="relative">
                    <input type={showPassword ? "text" : "password"} 
                    value={formData.password}
                    onChange={handleChange}
                    name="password" 
                    id="password" placeholder="*************" 
                    className="w-full p-2 mb-3 rounded-lg focus:outline-none pl-4 outline-gray-400 border-gray-400 border bg-white"
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

                <button type='submit' className='w-full px-8 py-2 mb-2 font-semibold rounded-lg text-white bg-[#009947]'>{isLoading? 'Loading...' : 'Sign Up'}</button>
                    <p className='text-center px-3'>Already have an account? {''} <a href="/sign-in" className="text-[#009947] font-bold">Sign In</a> </p>
                    <p className="text-center text-sm"> By signing up you accept our <br /> <Link className="underline">terms and condition & private policy</Link></p>
                </div>
            </form>
            </div>
        </div>
        )}
        </>
    );
};

export default Signup;

