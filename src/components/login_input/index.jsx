import { styled } from "styled-components";

const LoginInput = styled.input`
    
    width: 100%;
    height: 100%;
    padding: ${props => props.value && "0.8rem 4rem 0 .4rem"};
    font-size: ${props => props.value && ".8rem"};
    transition: font-size linear .1s,
    padding linear .1s;
    background:var(--ig-secondary-background);
    border: 1px var(--ig-stroke) solid;
`,
SubmitBtn = styled(LoginInput)`
        background:var(--ig-primary-button);
        color:var(--web-always-white);
        border-radius:.5rem;
        padding:0;
        font-weight:bold;
        margin-top:.8rem;
        opacity:${props=>props.disabled && ".7"};
        cursor:pointer;


    `;
export {LoginInput,SubmitBtn};