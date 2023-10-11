import styled from "styled-components";
import Image from "../image";

const objArr = [
    {
        path:"home-icon.png",
        title:"Inicio"
    },
    {
        path:"search-icon.png",
        title:"Buscar"
    },
    {
        path:"explore-icon.png",
        title:"Explorar"
    },
    {
        path:"reel-icon.png",
        title:"Reels"
    },
    {
        path:"messenger-icon.png",
        title:"Mensajes"
    },
    {
        path:"heart-icon.png",
        title:"Notificaciones"
    },
    {
        path:"create-icon.png",
        title:"crear"
    },
    {
        path:"no-photo.jpg",
        title:"Perfil"
    }
],
IconContainer = styled.div`
    width:9%;
    display:flex;
    align-items: center;
    margin-top:10%;
`,
IgLogo = styled.div`
    width:50%;
    margin-bottom:8%;
`,
MoreLogoContainer = styled(IconContainer)`
    margin-top:20%;
`,

Container = styled.nav`
width:25%;
position:fixed;
font-size:1.8rem;
display:flex;
height: 70vh;
flex-direction: column;
justify-content: space-between;
padding-left:2rem;
border-right:1px solid var(--ig-stroke);
`;
const HeaderFeed3 = ()=>{
    const items = objArr.map((obj,index)=><IconContainer key={index}>
        <Image src={obj.path}/>
        &nbsp;
        {
            index===0 ? <strong> {obj.title} </strong> : obj.title
        }
    </IconContainer>);
    return(<Container>
        <IgLogo>
            <Image src="Instagram_logo.png"/>
        </IgLogo>
        {items}
        <MoreLogoContainer>
            <Image src="hamburger-icon.png"/>&nbsp;Más
        </MoreLogoContainer>
    </Container>)
};
export default HeaderFeed3;