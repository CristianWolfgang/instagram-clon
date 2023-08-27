import { styled } from "styled-components";
import Image from "../image";
import FormContainer from "../form_container";

const Facebook = styled.div`
    color: var(--fb-color);
    display:flex;
    
    align-items: center;
    justify-content: center;
    font-size:${props=>props.fontSize||".9rem"};
    font-weight:${props=>props.fontWeight && "600"};
`,
FacebookIcon = styled.div`
    width:1.5rem;
    height:1.5rem;

`;
const LoginAlts=()=>{

    return (
        <FormContainer>
            <Facebook fontWeight={true.toString()}><FacebookIcon><Image src="/fb-icon.svg"/></FacebookIcon>&nbsp;Iniciar sesión con Facebook</Facebook>
            <br/>
            <Facebook fontSize=".75rem">¿Olvidaste tu contraseña?</Facebook>
            <br/>
        </FormContainer>
    );
};
export default LoginAlts;