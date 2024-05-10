import styled from "styled-components";

export const VoterHomeParent = styled.main`
  width: 100vw;
  height: 100vh;
  background:#F5F5F5;
  
  & .loader {
    position: absolute;
    top: 50%;
    left: 55%;
  }
 
`;

export const CenterWrapper = styled.div`
width: 93%;
height: 90%;
margin: 5rem auto;
background:#F5F5F5;
// position: relative;
  `;



export const PersonalInfoWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  background: #fff;
  border: 1px solid #D9D9D9;
  border-radius: 12px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03);

`;


export const Wrapper = styled.div`
  display:flex;
  width: 100vw;
  height: 70%;
  background:#F5F5F5;
  flex-direction:row;
`;

export const PresidentialWrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction:column;
background:#fff;
align-items: center;
margin-top: 1rem; 
border: 1px solid #D9D9D9;
border-radius:10px;    
`;

export const PartyWrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
flex-direction:column;
background:#fff;
align-items: center;
margin-left:1rem; 
border: 1px solid #D9D9D9; 
border-radius:10px;  
margin-top:1rem;
`;


export const GubernatorialWrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
background:#fff;
align-items: center;
border: 1px solid #D9D9D9;  
border-radius:10px;
`;

export const HouseofRepWrapper = styled.div`
width: 100%;
height: 90%;
display: flex;
background:#fff;
align-items: center;
margin-left:1rem; 
border: 1px solid #D9D9D9; 
border-radius:10px;
 
`;



