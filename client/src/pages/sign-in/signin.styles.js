import styled from "styled-components";

export const SigninParent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
     `;

export const SigninWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    `;



export const LContainer = styled.div`
    width: 20%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   margin-right:5rem;

    & img{
     height:4rem;
     width:8rem;
     
     
    }
    `;


export const FormHeader = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    margin-top:2rem;
    align-items: center;
    justify-content:center;
    align-content: center;
       
   
   
    & h3 {
        margin-top:2rem;
        font-size:1rem;
        font-weight:450;
        line-height:0.1rem;
        
    }

    & p{
        line-height:0.1rem;
        margin-top:0.1rem;
    }
    `;

export const FormContainer = styled.div`
    width: 22%;
    height: 80%;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    align-items: center;
    border: 1px solid #F2F2F2;
    border-radius: 5px;
    margin-left: 30rem;
    justify-content: center;
    margin-top:5rem;

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
        margin-left:3rem;
    }
    
   
    `;