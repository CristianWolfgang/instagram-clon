import { styled } from "styled-components";
import Image from "../image";
import FormContainer from "../form_container";
import { useContext } from "react";
import LoginContext from "../../contexts/login/context";

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

`,
Error = styled.div`
    color:var(--ig-error);
    text-align:center;
    font-size:.9rem;
    margin-bottom:1rem;
`;
const LoginAlts=()=>{
    const {loginError} = useContext(LoginContext);
    return (
        <FormContainer>
            <Facebook fontWeight={true.toString()}><FacebookIcon><Image src="/fb-icon.svg"/></FacebookIcon>&nbsp;Iniciar sesión con Facebook</Facebook>
            <br/>
            {
                loginError && <Error>La contraseña no es correcta. Compruébala.</Error>
            }
            <Facebook fontSize=".75rem">¿Olvidaste tu contraseña?</Facebook>
            <br/>
        </FormContainer>
    );
};
export default LoginAlts;