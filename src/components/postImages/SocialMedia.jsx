import { styled } from "styled-components";
import Image from "../image";

const Component = styled.div`
display:flex;
flex-direction:column;
background-image: linear-gradient(to top, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%);
height:100%;
justify-content: space-evenly;
border-radius:.5rem;
padding-left:10%;
`,
IconLink = styled.a`
    display:flex;
    align-items: center;
    font-weight:bold;
    color:white;
    letter-spacing:1px;
    text-decoration:none;
`,
Icon = styled.div`
    width:2rem;
    height:2rem;
    display:inline-block;
`;
const SocialMedia = ()=>{

    return (<Component>
        <IconLink href="https://www.instagram.com/cristian.dev01/">
            <Icon>
                <Image src="ig-icon.png"/>
            </Icon>
            /cristian.dev01/
        </IconLink>

        <IconLink href="https://www.linkedin.com/in/cristian-dz/">
            <Icon>
                <Image src="/linkedin-icon.png"/>
            </Icon>
            /in/cristian-dz
        </IconLink>

        <IconLink href="https://cristianwolfgang.github.io/">
            <Icon>
                <Image src="web-icon.png"/>
            </Icon>
                Portfolio
        </IconLink>
    </Component>)
};
export default SocialMedia;