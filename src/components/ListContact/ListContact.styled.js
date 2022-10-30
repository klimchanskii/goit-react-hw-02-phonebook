import styled from "styled-components";


export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 25px;
margin-top: 20px;
`

export const Item = styled.li`
list-style: none;
border: solid 1px black;
width: 260px;
display: flex;
flex-direction: column;
list-style: none;
gap: 12px;
align-items: center;
`

export const Button = styled.button`
display: inline-block;	
width: 150px;
	box-sizing: border-box;
	padding: 0 25px;
	margin: 0 15px 15px 0;
	outline: none;
	border: 1px solid #fff;
	border-radius: 50px;
	height: 46px;
	line-height: 46px;
	font-size: 14px;
	font-weight: 600;
	text-decoration: none;
	color: #444;
	background-color: #fff;
	box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
	cursor: pointer;
	user-select: none;
	appearance: none;
	touch-action: manipulation;  
	vertical-align: top;
	transition: box-shadow 0.2s;


`