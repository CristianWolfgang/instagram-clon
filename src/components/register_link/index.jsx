import { Link } from "react-router-dom";
import { styled } from "styled-components";

const RegisterLink  = styled.p`
    font-size:.9rem;
    text-align:center;
    @media only screen and (min-width:451px){
        padding:.5rem;
    }
`,
LinkContent = styled(Link)`
    text-decoration:none;
    color:var(--ig-primary-button);
    font-weight:600;
`;
const RegisterContainer = ()=><RegisterLink>¿No tienes una cuenta? <LinkContent>Regístrate</LinkContent></RegisterLink>;

export default RegisterContainer;