import React from "react";
import logo from "../../assets/logo.png";
import {
    VerifyParent,
    VerifyWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer,

} from "./verify.password.styles.js";
import { Link } from "react-router-dom";
import {
    FormControl,
    Button
} from "@chakra-ui/react";
import voting from "../../assets/voting.png";





const VerifyPassword = () => {


    return (
        <VerifyParent>
            <VerifyWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat",backgroundSize:"100vw 100vh",
                    height: 800, width: 2000
                }}>

                    <FormContainer>
                        <form>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h2>Enter verification code!</h2>
                             <h3>A verification code has been sent to</h3>
                               <p> your number</p>

                            </FormHeader>



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
                                    text="Verify"

                                >
                                    Verify


                                </Button>
                            </FormControl>

                            <FormFooter><h3>Didnt't get a code? <Link >Click here to resend</Link></h3>
                                
                            </FormFooter>
                        </form>
                    </FormContainer>
                </div>
            </VerifyWrapper>
        </VerifyParent>

    );
};

export default VerifyPassword;