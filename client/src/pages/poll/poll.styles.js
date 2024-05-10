import styled from "styled-components";

export const PollParent = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
  margin: 5rem auto;
`;

export const PollHeadersContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.8rem;
  padding: 0 3rem;
  background: #fff;
  border-top: 1px solid #E6F5ED;
  border-right: 1px solid #E6F5ED;
  border-left: 1px solid #E6F5ED;
  border-bottom: 5px solid #E6F5ED;
  border-radius: 8px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  width: 150%;
 
  
`;



export const Header = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${(props) => {
    return props.active === 1 ? "4px solid #0570FB" : "none";
  }};
`;


export const SearchBarContainer = styled.div`
  display: flex;
  width:100%;
  height: 50%;
  margin-left: 1rem;
  margin-bottom:3rem;
  margin-top:3rem;
  
`;

export const SearchBarForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 500%;
  padding-left: 1px;
  padding-bottom: 5px;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    background: #fff;
    color: #00B4B6;
    font-size: 1rem;
    margin-left:2rem;
    

  }
  & .search-input::placeholder {
    color: #5d5e5f;
    line-height: 25px;
    font-size: 1rem;
    margin-left: 3rem;
  }
  & button {
    background: transparent;
    border: 0;
    outline: none;
    width: 20px;
    height: 10px;
  }
  & button img {
    width: 13px;
    height: 13px;
    margin-top: 0.7rem;
    margin-right: 2rem;
  }
`;

export const Button = styled.button`
display: flex;
background:#fff;
width:10rem;
border: 1px solid #b3b3b3; 
border-radius:5px;
color:#000;
height: 2.1rem;
align-items: center;
justify-content: center;
margin-left:20rem;
margin-right:4rem;
margin-top:3rem;

`;

export const DataHeadersContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: #E6F5ED;
  padding: 0px 50px;
  height: 5.8rem;
  width: 100%;
  gap: 2rem;
  

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }
`;

export const DataHeader = styled.div`
  padding: 0px 24px;
  box-shadow: inset 0px -1px 0px #edf2f7;
  width: 15%;
  display: flex;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 2.8rem;
`;



export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & .spinner {
    margin: 0 auto !important;
    text-align: center;
  }
`;

export const Rows = styled.section`
  display: flex;
  flex-direction:column;
  height: 100vh;
  width: 90vw;
  font-size:1rem;
  font-weight:500;
  background:#ffffff;
  gap:3rem;
  justify
  
  

  & table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 85vw;
    height:100vh;
    margin-top:10rem;
    padding:2rem auto;
    display:flex;
   
  }

  & td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 4px;
  }

  & tr:nth-child(even) {
    background-color: #dddddd;
  } 
`;


