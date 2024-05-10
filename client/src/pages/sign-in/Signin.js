import React, {useState} from "react";
import logo from "../../assets/logo.png";
import axios from "axios";
import {
    SigninParent,
    SigninWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer,

} from "./signin.styles.js";
import { Link } from "react-router-dom";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Text
} from "@chakra-ui/react";
import voting from "../../assets/voting.png";




const Signin = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        phoneNumber: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/signin", formData);
            // localStorage.setItem("token", response.data.token);
            // localStorage.setItem("user", JSON.stringify(response.data.user));
            if (response.status === 200) {
                console.log('signin successful')
                window.location.href = "/";
                
            } else {
                console.error('Signin failed');
            }
            
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <SigninParent>
            <SigninWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh",
                    height: 800, width: 2000
                }}>

                    <FormContainer>
                        <form onSubmit={handleSubmit}>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h3>Sign in to cast your vote for who you
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
                                    value={formData.name}
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
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}

                                />
                            </FormControl>
                            <Text
                                fontSize="15"
                                fontWeight="500"
                                fontFamily="inherit"
                                marginTop={2}
                                marginLeft={"11rem"}
                                color={"#009947"}
                            >
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </Text>
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
                                    text="Sign in"

                                >
                                    Sign in


                                </Button>
                            </FormControl>

                            <FormFooter><h3>Don't have an account? <Link to="/sign-up" colorScheme={'#009947'}>Sign up</Link></h3>
                            </FormFooter>
                        </form>
                    </FormContainer>
                </div>
            </SigninWrapper>
        </SigninParent>

    );
};

export default Signin;