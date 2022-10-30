import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
gap: 10px;
width: 500px;
` 
export const Button = styled.button`
background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    width: 180px;
    &:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);}
`