import { styled } from "styled-components";

const Container = styled.div`
width:100%;
height:100%;
text-align:center;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-weight:bold;
line-height:1.5rem;
border-radius:.5rem;
background-image:radial-gradient(
    circle
    at 15% 100%,
    #fccc63 ,
    #fbad50 10%,
    #e95950,
    #8a3ab9 42%,
    #bc2a8d 60%,
    #4c68d7 90%
);
`;
const InstagramClon = ()=>{
    return (<Container>
        Make a clon of an app like instagram (which has with many functions) is a excelent way to practice and be better in programming.
    </Container>);
};
export default InstagramClon;