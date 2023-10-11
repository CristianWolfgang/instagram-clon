import styled from "styled-components";
import Image from "./../image";
const Container = styled.nav`
width: 10%;
position: fixed;
display: flex;
height: 100vh;
flex-direction: column;
justify-content: space-around;
border-right:1px solid var(--ig-stroke);
`,
IconContainer = styled.div`
width:30%;
margin:0 auto;
`;
const HeaderFeed2 = ()=>{
    const arr = [
        "ig-icon2.png",
        "home-icon.png",
        "search-icon.png",
        "reel-icon.png",
        "messenger-icon.png",
        "heart-icon.png",
        "no-photo.jpg",
        "hamburger-icon.png"
    ],
    Icons = arr.map((path,index)=><IconContainer key={index}>
        <Image src={path}/>
    </IconContainer>)
    return(
        <Container>
            
            {
                Icons
            }
        </Container>
    )
};
export default HeaderFeed2;