import styled from "styled-components";

export const VerifyParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
     `;

export const VerifyWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;



export const LContainer = styled.div`
    width: 60%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2rem;

    & img{
     height:4rem;
     width:8rem;
     margin-top:2rem;
     
     
    }
    `;


export const FormHeader = styled.div`
    width: 70%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin-top:2rem;
    align-items: center;
    justify-content:center;
    align-content: center;
       
   
   
    & h2 {
        margin-top:2rem;
        font-size:1.2rem;
        font-weight:500;
        line-height:2rem;
        
    }

    & h3 {
        line-height:1rem;
        margin-top:0.5rem;
        font-size:0.8rem;
        font-weight:450;
        
    }

    & p{
        line-height:1rem;
       font-size:0.8rem;
       margin-bottom:3rem;
        
    }
    `;

export const FormContainer = styled.div`
    width: 22%;
    height: 50%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    align-items: center;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
    margin-left: 30rem;
    justify-content: center;
    margin-top:7rem;

    & form {
    width: 100%;
    height: 100%;
    margin-left: 10rem;
    

    }
     
    & form-label{
        border-radius:1px;
    }
    & form-label.input.placeholder{
        margin-left:1rem;
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
       line-height:0.5rem;
        font-weight:400;
        margin-left:1rem;
        
   
     
   
    `;