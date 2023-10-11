import { useContext, useState } from "react";
import {LoginInput,SubmitBtn} from "../login_input";
import FormContainer from "../form_container";
import InputPlaceholder from "../input_placeholder";
import InputContainer from "../input_container";
import ShowPasswordBtn from "../show_password_btn";
import USER from "../../users";
import LoginContext from "../../contexts/login/context";
import Cookies from "js-cookie";

const LoginForm = () => {
    const [username, setUsername] = useState(""),
        [password, setPassword] = useState(""),
        {setloginError} = useContext(LoginContext),
        [showPassword, setShowPassword] = useState(false),
        handleChangeUsername = e => setUsername(e.target.value),
        handleChangePassword = e => setPassword(e.target.value),
        placeHolderHandleClick = e => {
            e.target.nextElementSibling.focus();
        },
        handleSubmit = e=>{
            e.preventDefault();
            if(username===USER.username && password === USER.password){
                Cookies.set("logged", true, {expires:3})
                location.reload();
            }else{
                setloginError(true);
            }
        },
        showPasswordHandler =e =>{
            e.preventDefault();
            setShowPassword(!showPassword);
        };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <InputContainer>
                    <InputPlaceholder onClick={placeHolderHandleClick} value={Boolean(username)}>
                        Teléfono, usuario o correo electrónico
                    </InputPlaceholder>
                    <LoginInput value={username} onChange={handleChangeUsername} />
                </InputContainer>

                <InputContainer>
                    <InputPlaceholder onClick={placeHolderHandleClick} value={Boolean(password)}>
                        Contraseña
                    </InputPlaceholder>
                    {
                        password && <ShowPasswordBtn onClick={showPasswordHandler}>Mostrar</ShowPasswordBtn>
                    }

                    <LoginInput value={password} onChange={handleChangePassword} type={!showPassword ? "password" : "text"} />
                </InputContainer>
                <InputContainer>
                    <SubmitBtn  type="submit" value="Iniciar sesión" disabled={!(username&&password)}/>

                </InputContainer>

            </form>
        </FormContainer>
    );
};
export default LoginForm;