import styled from "styled-components";
import Image from "../image";

const Nav = styled.nav`
    position:fixed;
    bottom:0;
    padding:.5rem 0;
    left:0;
    display:flex;
    justify-content:space-around;
    width:100%;
    border-top:1px solid var(--ig-stroke);
    background-color:var(--ig-secondary-background);
`,
NavIcon = styled.div`
    width:1.5rem;
    height:1.5rem;
`;

const OptionsNav = ()=>{
    return(
        <Nav>
            <NavIcon>
                <Image src="home-icon.png"/>
            </NavIcon>
            <NavIcon>
                <Image src="search-icon.png"/>
            </NavIcon>
            <NavIcon>
                <Image src="reel-icon.png"/>
            </NavIcon>
            <NavIcon>
                <Image src="messenger-icon.png"/>
            </NavIcon>
            <NavIcon>
                <Image src="no-photo.jpg"/>
            </NavIcon>
        </Nav>
    );
};
export default OptionsNav;