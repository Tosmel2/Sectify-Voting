import styled from "styled-components";
import {Link} from "react-router-dom";


export const HomeParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index:3;
   

    
    
     `;

export const HomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position:relative;
    background-color:#009947;
    color: #009947;
    z-index:auto;

   
    `;

    export const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    z-index:auto;
    justify-content: center;
    position: absolute;
    background: rgba(0, 99, 0, 0.5);
    content: '';
   

   
    `;

    



export const LContainer = styled.div`
    width: 20%;
    height: 10%;
    display: flex;
    justify-content: center;
    margin-left:3rem;
    margin-top:0.5rem;
    
    

    & img{
     height:3rem;
     width:8rem;
  
     
    }
    `;

    export const NavContainer = styled.div`
    width: 60%;
    height: 10%;
    display: flex;
    flex-direction: column;
    margin-right:5rem;
    background:#fff;
    border-radius: 10px;
    border: 1px solid #D9D9D9; 
    margin-top: 3rem;
    margin-left: 5rem; 
    

    
    `;

 export const Container = styled(Link)`
    display: flex;
    
    `;
    
    

    export const BigLinkContainer = styled(Link)`
    display: flex;
    margin-left: 35rem;
    z-index:3;
   
    
     
    `;
    
    
    
    

export const LinkContainer = styled(Link)`
display: flex;
color: #000;
margin-right:2rem;
margin-top:1rem;
font-size: large;
font-family: Arial, Helvetica, sans-serif;
text-decoration: none;
&:hover,
&:focus{
    color: #000000;
}
&:active{
    color: #009947;

 
`;

export const SButton = styled.button`
display: flex;
background:#009947;
width:7rem;
border: 1px solid #009947; 
border-radius:5px;
color:#fff;
height: 2.1rem;
align-items: center;
justify-content: center;
margin-top:0.5rem;
z-index:3;



`;

export const TextContainer= styled.div`
width: 100vw;
position: absolute;
top: 45%;
left: 60%;
margin-left:10rem;
transform: translate(-50%, -50%);
color:#fff;
align-content:center;
justify-content: center;

& h3{
font-weight:700;
line-height:4rem;
font-size:2.5rem;
font-family: Sans-Serif;
color:  #fff;

}

& h4 {
    font-weight:600;
    margin-left:3rem;
    font-size:1.2rem;
    line-height:2rem;
    font-family: Sans-Serif;
    color:#fff;
    margin-top:3rem;
}

& p {
    font-weight:600;
    margin-left:22rem;
    line-height:1rem;
    font-size:1.2rem;
    color:  #fff;
}

`;


export const Button = styled.button`
display: flex;
background:#009947;
width:10rem;
border: 1px solid #009947; 
border-radius:5px;
color:#ffffff;
height: 2.1rem;
align-items: center;
margin-top:2rem;
justify-content: center;
margin-left:20rem;

`;

