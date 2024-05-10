import React, {useState} from "react";
import logo from "../../assets/logo.png";
import {
    SignupParent,
    SignupWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer,

} from "./sign.up.styles";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react";
import voting from "../../assets/voting.png";




const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        phoneNumber: "",
        VIN: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("http://localhost:8000/signup", formData);
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("user", JSON.stringify(response.data.user));
            if (response.status === 200) {
                console.log('Registration successful')
                window.location.href = "/signin";
                
            } else {
                console.error('Registration failed');
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SignupParent>
            <SignupWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat",backgroundSize:"100vw 120vh",
                    height: 800, width: 2000
                }}>

                    <FormContainer>
                        <form onSubmit={handleSubmit}>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h3>Sign up to cast your vote for who you
                                     </h3>
                                     <p>believe in.</p>

                            </FormHeader>


                            <FormControl marginBottom={"4px"}>
                                <FormLabel
                                    fontSize="15"
                                    fontWeight="400"
                                    fontFamily="inherit"
                                    paddingBlock="4px"
                                >
                                    Full name
                                </FormLabel>
                                <Input
                                    type="text"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter full name"
                                    name="fullname"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                    value={formData.fullname}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl marginBottom={"7px"}>
                                <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                    VIN
                                </FormLabel>
                                <Input
                                    type="number"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter VIN"
                                    name="VIN"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                    value={formData.VIN}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl mt={4} marginBottom={"7px"}>
                                <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                    Phone Number
                                </FormLabel>
                                <Input
                                    type="number"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter Phone Number"
                                    name="phoneNumber"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl mt={4} marginBottom={"7px"}>
                                <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="2px">
                                    Password
                                </FormLabel>
                                <Input
                                    type="password"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Password"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </FormControl>



                            <FormControl marginBottom={"2px"}>
                                {" "}
                                <Button
                                    colorScheme={"#009947"}
                                    color={"#fff"}
                                    width={"18.5rem"}
                                    mt={4}
                                    fontSize="12"
                                    fontWeight="600"
                                    fontFamily="inherit"
                                    backgroundColor={"#009947"}
                                    height={"2rem"}
                                    marginBottom={"0.1rem"}
                                    borderRadius={"5px"}
                                    borderColor={"#009947"}
                                    text="Sign Up"

                                >
                                    {isLoading ? "Loading" : "Sign Up"}


                                </Button>
                            </FormControl>

                            <FormFooter><h3>Already have an account?          <Link to="/sign-in" colorScheme={'#009947'}>Sign in</Link></h3>
                                <p> By signing up you accept our <Link>terms and condition &
                                   <br></br> private policy</Link></p>
                            </FormFooter>
                        </form>
                    </FormContainer>
                </div>
            </SignupWrapper>
        </SignupParent>

    );
};

export default Signup;