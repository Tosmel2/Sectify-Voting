import React from "react";
import logo from "../../assets/logo.png";
import {
    ConfirmParent,
    ConfirmWrapper,
    FormHeader,
    FormContainer,
    LContainer

} from "./confirm.password.styles.js";
import {
    FormControl,
    FormLabel,
    Input,
    Button    
} from "@chakra-ui/react";
import voting from "../../assets/voting.png";




const ConfirmPassword = () => {


    return (
        <ConfirmParent>
            <ConfirmWrapper>
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
                                

                            </FormHeader>


                            <FormControl marginBottom={"4px"}>
                                <FormLabel
                                    fontSize="15"
                                    fontWeight="400"
                                    fontFamily="inherit"
                                    paddingBlock="4px"
                                >
                                    Password
                                </FormLabel>
                                <Input
                                    type="name"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Enter password"
                                    name="password"
                                    borderRadius={"5px"}
                                    width={"18rem"}
                                />
                            </FormControl>
                            <FormControl mt={4} marginBottom={"7px"}>
                                <FormLabel fontSize="15" fontWeight="400" fontFamily="inherit" paddingBlock="4px">
                                    Confirm password
                                </FormLabel>
                                <Input
                                    type="password"
                                    fontSize="10"
                                    fontWeight="300"
                                    fontFamily="inherit"
                                    height={"1.8rem"}
                                    placeholder="Confirm password"
                                    name="confirmpassword"
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
                                    Reset password
                                </Button>
                            </FormControl>
                        </form>
                    </FormContainer>
                </div>
            </ConfirmWrapper>
        </ConfirmParent>

    );
};

export default ConfirmPassword;