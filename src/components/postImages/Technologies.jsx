import { styled } from "styled-components";

const Component = styled.div`
width:100%;
height:100%;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
background-image:url(./react-bg.jpg);
background-size:160% 145%;
background-position:bottom right;
color:white;
border-radius:.5rem;
font-size:2rem;
`;
const Technologies = ()=>{
    return(<Component>
        100% react.js
    </Component>);
};
export default Technologies;