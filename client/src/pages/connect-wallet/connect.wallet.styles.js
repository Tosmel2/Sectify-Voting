import styled from "styled-components";

export const ConnectParent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
     `;

export const ConnectWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;


export const FormHeader = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
       
   
   
    & h3 {
        margin-top:2rem;
        font-size:1rem;
        font-weight:450;
        line-height:0.1rem;
        
    }

    `;

    export const LContainer = styled.div`
    width: 80%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & img{
     height:5rem;
     width:8rem;
    }
    `;

export const FormContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    justify-content: center;

    & form {
    min-width: 35%;
    height: 80%;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    }
     
    `;





export const Button = styled.button`
display: flex;
background:#FFFFFF;
width: 70%;
border: 1px solid #B3B3B3; 
border-radius:5px;
color:#000000;
padding: 0.5em 0;
align-items: center;
justify-content: center;
margin-bottom: 1rem;

& img{
   margin-right:1rem;
}


`;

export const FormFooter = styled.div`
    width: 100%;
    height: 2%;
    display: flex;
    flex-direction: column;
    font-size:0.8rem;
   line-height:1rem;

    & h3 {
       line-height:1.5rem;
        font-weight:400;
        font-size:0.8rem;
        text-align:center;
        padding: 0 0.8rem;
    }
   
     
   
    `;