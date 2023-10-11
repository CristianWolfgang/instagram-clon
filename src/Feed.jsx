import HeaderFeed from "./components/header_feed";
import Stories from "./components/stories";
import Posts from "./components/post";
import OptionsNav from "./components/options_nav";
import styled from "styled-components";
import { useState } from "react";
import HeaderFeed2 from "./components/header_feed_2";
import HeaderFeed3 from "./components/header_feed_3";
import { useMediaQuery } from "react-responsive";
const MainContainer = styled.div`
    @media (min-width:768px){
    }
`,
StoriesContainer = styled.div`
    @media (min-width:768px){
        position:relative;
        // top:2rem;
        border-bottom:1px solid var(--ig-stroke);
        left:10%;
    }
    @media (min-width:1440px){
        left:25%;
    }
`;
const Feed = ()=>{

    const screenSize768 = useMediaQuery({
        maxWidth:767
    }),
    screenSize1440 = useMediaQuery({
        minWidth:1339
    });
    console.log(screenSize768);
    return(
        <>
        
            {
                screenSize768 ? <HeaderFeed/> : screenSize1440 ? <HeaderFeed3/> : <HeaderFeed2/>

            }   
        
        
        <MainContainer>
            <StoriesContainer>
                <Stories/>
            </StoriesContainer>
            <Posts/>
        </MainContainer>
        {
            screenSize768 && <OptionsNav/>

        }
        </>
    )
}
export default Feed;