import React from "react";
import logo from "../../assets/logo.png";
import {
    ResetParent,
    ResetWrapper,
    FormHeader,
    FormContainer,
    LContainer

} from "./reset.password.styles.js";
import {
    FormControl,
    FormLabel,
    Input,
    Button    
} from "@chakra-ui/react";
import voting from "../../assets/voting.png";




const ResetPassword = () => {


    return (
        <ResetParent>
            <ResetWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh",
                    height: 800, width: 2000
                }}>

                    <FormContainer>
                        <form>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h2>Reset password!</h2>
                                <h3>A verification code will be sent to your registered </h3>
                                <p>phone number</p>

                            </FormHeader>


                            <FormControl marginBottom={"4px"}>
                                <FormLabel
                                    fontSize="15"
                                    fontWeight="400"
                                    fontFamily="inherit"
                                    paddingBlock="4px"
                                >
                                    VIN
                                </FormLabel>
                                <Input
                                    type="name"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter VIN"
                                    name="VIN"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                />
                            </FormControl>
                            <FormControl mt={4} marginBottom={"7px"}>
                                <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                    Phone Number
                                </FormLabel>
                                <Input
                                    type="phonenumber"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter Phone Number"
                                    name="phonenumber"
                                    borderRadius={"5px"}
                                    width={"18rem"}
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
                                    text="Sign in"

                                >
                                    Send code
                                </Button>
                            </FormControl>
                        </form>
                    </FormContainer>
                </div>
            </ResetWrapper>
        </ResetParent>

    );
};

export default ResetPassword;