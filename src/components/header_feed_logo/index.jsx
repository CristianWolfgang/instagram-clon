import { styled } from "styled-components";
import Image from "../image";
const LogoContainer = styled.div`
    
    height: 2.8rem;
    width: 150px;
    padding:.1rem;

`,
    HeaderFeedLogo = () => {
        return <LogoContainer><Image src="/Instagram_logo.png" /></LogoContainer>
    }
export default HeaderFeedLogo;