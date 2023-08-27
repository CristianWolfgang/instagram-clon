import { styled } from "styled-components";
import DownloadApp from "./components/download_app";
import InstagramLogo from "./components/instagram_logo";
import LoginAlts from "./components/login_alts";
import LoginFooter from "./components/login_footer";
import LoginForm from "./components/login_form";
import Or from "./components/or_container";
import RegisterContainer from "./components/register_link";
import Smartphone from "./Smartphone";

const Container = styled.div`
    @media only screen and (min-width:876px){
        display:flex;
        justify-content:center;
    }
`, //main container of page
    Container1 = styled.div`

`,
    Container2 = styled.div`
    @media only screen and (min-width:451px){
        width:350px;
        background-color:var(--web-always-white);
        margin: ${prop=>prop.$marginTop||"0"} auto 0;
        ${props=>props.$border && "border:1px solid var(--ig-stroke);"}
    }
`;// borders
const Login = () => {

    return (
        <>
            <Container>
                <Container1>
                    <Smartphone/>
                </Container1>
                <Container1>
                    <Container2 $marginTop="3rem" $border>
                        <InstagramLogo />
                        <LoginForm />
                        <Or />
                        <LoginAlts />
                    </Container2>

                    <Container2 $marginTop=".6rem" $border>
                        <RegisterContainer/>
                    </Container2>

                    <Container2 $marginTop="3rem">
                        <DownloadApp/>
                    </Container2>
                </Container1>
            </Container>
            <LoginFooter/>
            {/* <Container>
                <Container1 >
                    <Smartphone />
                </Container1>

                <Container1>
                    <Container1 $media>
                        MEMEA
                        <Container2 $marginTop="7vh">
                            <InstagramLogo />
                            <LoginForm />
                            <Or />
                            <LoginAlts />
                        </Container2>
                        <Container2 $marginTop="2vh">
                            <RegisterContainer />
                        </Container2>
                        <DownloadApp />
                    </Container1>

                </Container1>

            </Container>
            <LoginFooter /> */}
        </>


    )
};
export default Login;