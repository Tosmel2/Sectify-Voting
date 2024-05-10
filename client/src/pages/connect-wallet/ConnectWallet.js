import React from "react";
import logo from "../../assets/logo.png";
import {
    ConnectParent,
    ConnectWrapper,
    FormHeader,
    FormContainer,
    FormFooter,
    LContainer,
    Button

} from "./connect.wallet.styles.js";
import { Link } from "react-router-dom";

import voting from "../../assets/voting.png";
import trustwallet from "../../assets/trustwallet.png";
import metamask from "../../assets/Meta mask.png";
import phantom from "../../assets/phantom.png";
import coinbase from "../../assets/coinbase.png";




const ConnectWallet = () => {


    return (
        <ConnectParent>
            <ConnectWrapper>
                <div style={{
                    backgroundImage: `url(${voting})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", height: "100vh"
                }}>

                    <FormContainer>
                        <form>
                            <FormHeader>

                                <LContainer>
                                    <img src={logo} alt="logo" />
                                </LContainer>
                                <h3>Connect your wallet </h3>


                            </FormHeader>
                            <Button><img src={metamask} alt="metamask" height={18} marginLeft={5} /> Meta mask</Button>


                            <Button> <img src={trustwallet} alt="trustwallet" height={18} marginRight={10} />Trust wallet</Button>


                            <Button><img src={phantom} alt="phantom" height={18} marginLeft={5} /> Phantom wallet</Button>


                            <Button>
                                <img src={coinbase} alt="coinbase" height={18} marginLeft={5} />Coinbase wallet


                            </Button>


                            <FormFooter><h3>By connecting a wallet, you agree to our <Link> Terms and
                                <br></br>Conditions</Link> and consent to its <Link>Privacy Policy </Link></h3>
                            </FormFooter>
                        </form>
                    </FormContainer>
                </div>
            </ConnectWrapper>
        </ConnectParent>

    );
};

export default ConnectWallet;