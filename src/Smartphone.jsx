import { styled } from "styled-components";
import Image from "./components/image";
import { useState } from "react";
const images = [
    "./public/ig-1.png",
    "./public/ig-2.png",
    "./public/ig-3.png",
    "./public/ig-4.png"
    ],
    Phones = styled.div`
    background-image:url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW);
    width: 490px;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: 215%;
    background-position-x: 100%;
    `,
    ImageContainer = styled.div`
    max-width: 265px;
    position: relative;
    left: 163px;
    top: 75px;
    `;
const Smartphone = () => {
    const mediaQuery = matchMedia("(min-width:876px)"),
    [queryMatches, setQueryMatches]= useState(mediaQuery.matches);
    window.onresize=e=>{
        setQueryMatches(mediaQuery.matches);
    }
    return (

        <>
            
            {
                queryMatches && (<Phones>
                <ImageContainer>
                        <Image src={images[1]} />
                </ImageContainer>
            </Phones>)


            }            
        </>
    );
};
export default Smartphone;