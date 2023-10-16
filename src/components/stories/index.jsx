import { styled } from "styled-components";
import STORIES from "../../stories";
import StoriesContainer from "../stories-container";
import { SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import WatchStory from "../watch-story";

const StoryContainer = styled.figure`
    width:4rem;
    height:4rem;
    margin:0;
    position:relative;
    cursor:pointer;
    z-index:1;
    ${props => !props.$noBorder && `
        &:after{
            top: -4px;
            left: -4px;
            width: 4.5rem;
            height: 4.5rem;
            position: absolute;
            content: "";
            border-radius: 50%;
            z-index: -1;
            background-image: linear-gradient( to bottom left, #8a3ab9, #e95950 );
        }`
    }
`,
    StoryImage = styled.img`
    position:absolute;
    top:0;
    left:0;
    border-radius:50%;
    width:100%;
    height:100%;
    border:3px solid white;
    object-fit:cover;
`,
    StoryTitle = styled.figcaption`
    position:absolute;
    top:4.2rem;
    margin-top:.2rem;
    font-size:.7rem;
    text-align:center;
    width:100%;
`,
    AddStory = styled.div`
    position:relative;
    width:1.5rem;
    height:1.5rem;
    border-radius:1rem;
    background-color:rgb(0, 149, 246);
    
    left: 80%;
    top: 65%;
    &:after{
        position:absolute;
        content:"";
        background-color:white;
        width: 15%;
        height: 70%;
        left: 44%;
        top: 10%;
    }
    &:before{
        position:absolute;
        content:"";
        background-color:white;
        
        width: 70%;
        height: 14%;
        top: 42%;
        left: 17%;

        
    }
`;

const Stories = () => {
    const [watchStory,setWatchStory] = useState(false),
    displayStory = ()=>{
        setWatchStory(!watchStory)
    };
    const stories = STORIES.map((obj, index) => {
        

        return (
        <SwiperSlide key={index}>
            <StoryContainer  onClick={displayStory}>
                <StoryImage src={obj.image} />
                <StoryTitle>
                    {obj.title}
                </StoryTitle>
            </StoryContainer>
        </SwiperSlide>);
    });


    return (
        <StoriesContainer>
            <SwiperSlide>
                <StoryContainer $noBorder >
                    <StoryImage src="/no-photo.jpg" />
                    <StoryTitle>
                        Tu historia
                    </StoryTitle>
                    <AddStory />
                </StoryContainer>
            </SwiperSlide>
            {stories}
           {watchStory && <WatchStory close={displayStory}/>}
        </StoriesContainer>);
};
export default Stories;