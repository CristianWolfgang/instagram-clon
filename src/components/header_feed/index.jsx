import { styled } from "styled-components";
import HeaderFeedLogo from "../header_feed_logo";
import { HeartIcon, PlusIcon } from "../header_feed_icons";
const Header = styled.header`
    border-bottom:1px solid var(--web-always-white);
    display:flex;
    
    align-items: center;
    justify-content: space-between;
`,
IconContainer = styled.div`
display:flex;
width:60px;
justify-content: space-between;
margin-right:20px;
`;
//bgcolor:rgb(219,219,219); 

const HeaderFeed = ()=>{
    return (<Header>
        <HeaderFeedLogo/>
        <IconContainer>
            <PlusIcon/>
            <HeartIcon/>
        </IconContainer>
    </Header>)
};
export default HeaderFeed;