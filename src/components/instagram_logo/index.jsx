import { styled } from "styled-components";
import Image from "../image";

const LogoContainer = styled.div`
    margin-top:2rem;
    width:60%;
    margin:2rem auto 0;
`,
InstagramLogo = ()=><LogoContainer><Image src="Instagram_logo.png"/></LogoContainer>
export default InstagramLogo;