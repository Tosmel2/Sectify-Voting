import React from "react";
import logo from "../../assets/logo.png";
import {
    HomeParent,
    HomeWrapper,
    LContainer,
    NavContainer,
    LinkContainer,
    BigLinkContainer,
    SButton,
    Button,
    TextContainer,
    Container,
    Overlay
   } from "./home.styles.js";
import landingimage from "../../assets/landingimage.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
      navigate("/sign-in");
    };

   

    return (
        <HomeParent>
            <HomeWrapper>
              <Overlay></Overlay>
                <div style={{
                    backgroundImage:  `url(${landingimage})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh",
                    height: 800, width: 1800, 
                }}>


                    <NavContainer>
                        <LContainer>
                            <img src={logo} alt="logo" />
                        </LContainer>
                        <Container>
                        <BigLinkContainer>
                        <LinkContainer><Link>About</Link></LinkContainer>
                       <LinkContainer><Link marginRight={20}>Process</Link></LinkContainer> 
                       <LinkContainer> <Link marginRight={10}>Blog</Link></LinkContainer>
                        <LinkContainer><Link to="/sign-in" marginRight={20}>Sign in</Link></LinkContainer>
                        
                        </BigLinkContainer>
                        <SButton><Link to="/sign-up">Sign up</Link></SButton>
                        </Container>
                    </NavContainer>
                  <TextContainer><h3>Unlock the power of your vote with SECTIFY</h3>
                   <h4>Welcome to our innovative voting platform, where your voice becomes the catalyst for 
                    <br></br>change. Join us on a transformative journey, empowering you to shape the future you
                   </h4>
                   <p> desire</p>
                    <Button onClick={handleGetStarted}>Get Started</Button>
                    </TextContainer>
                </div>
            </HomeWrapper>
        </HomeParent>

    );
};

export default Home;