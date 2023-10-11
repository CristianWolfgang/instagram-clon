import { styled } from "styled-components";
import Image from "../image";
import { useContext, useEffect, useState } from "react";
import LoginContext from "../../contexts/login/context";

const Phones = styled.div`
    background-image:url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones-2x.png?__makehaste_cache_breaker=73SVAexZgBW);
    width: 490px;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: ${props=>props.$error ? "69" :"215"}%;
    background-position-x: 100%;
    `,
    ImageContainer = styled.div`
    max-width: 265px;
    position: relative;
    left: 163px;
    top: 75px;
    `,
    ImageComponent = styled(Image)`
        position:absolute;
        height:570px;
        opacity:${prop=>prop.$active? 1 : 0};
        transition:opacity 1.5s linear;    
    `;

const useCounter = ()=>{
    const [counter,setCounter] = useState(0),
    nextActiveElement = ()=>{
        setCounter(counter=>counter===3 ? 0 :counter+1);
    },
    interval = ()=>setInterval(nextActiveElement,7000);
    return {
        counter,
        interval
    };
};
const Smartphone = () => {
    

    const {counter,interval} = useCounter(),
    {loginError} = useContext(LoginContext);
    useEffect(()=>{
        const intId = interval();
        return ()=>clearInterval(intId);
    });
    return (

        <>

            {
                (<Phones $error={loginError}>
                    <ImageContainer>
                        <ImageComponent src="/ig-1.png" $active={counter===0} />
                        <ImageComponent src="/ig-2.png" $active={counter===1} />
                        <ImageComponent src="/ig-3.png" $active={counter===2} />
                        <ImageComponent src="/ig-4.png" $active={counter===3} />
                    </ImageContainer>
                </Phones>)


            }
        </>
    );
};
export default Smartphone;