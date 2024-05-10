import React from "react";
import {
    VoterHomeParent,
    CenterWrapper,
    Wrapper,
    PresidentialWrapper,
    PartyWrapper,
    GubernatorialWrapper,
    HouseofRepWrapper,
    PersonalInfoWrapper
} from "./voter.home.styles";
import Toppresident from "../../components/toppresident/Toppresident";
import Gubernatorial from "../../components/gubernatorial/Gubernatorial";
import House from "../../components/house/House";
import Party from "../../components/party/Party";



const VoterHome = () => {

    return (

        <VoterHomeParent>

            <CenterWrapper>

                <PersonalInfoWrapper>

                </PersonalInfoWrapper>
                <Wrapper>
                    <PresidentialWrapper>
                    <h3>Top 5 President candidate 2023 (by vote) </h3>
                        <Toppresident />
                    </PresidentialWrapper>
                    <PartyWrapper>
                        <h3>Top 3 leading parties across the federation </h3>
                        <Party />
                    </PartyWrapper>
                </Wrapper>
                <Wrapper>
                    <GubernatorialWrapper>
                        <Gubernatorial />
                    </GubernatorialWrapper>
                    <HouseofRepWrapper>
                        <House />
                    </HouseofRepWrapper>
                </Wrapper>
            </CenterWrapper>
        </VoterHomeParent>










    );







};

export default VoterHome;