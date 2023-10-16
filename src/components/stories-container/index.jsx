import { styled } from "styled-components";
import {Swiper} from "swiper/react";
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import 'swiper/css/free-mode';
import {FreeMode} from "swiper/modules";

const Container = styled(Swiper)`
    padding-top:.5rem;
    padding-right:1rem;
    height:6.5rem;
`,
Container1 = styled.div`
display: grid;
grid-auto-columns: 5rem;
grid-auto-flow: column;
padding: 0.5rem;
overflow-x: auto;
height:7rem;
background-color:var(--ig-secondary-background);
border-top:1px solid var(--ig-stroke);
border-bottom:1px solid var(--ig-stroke);
overflow:hidden;
@media (min-width:768px){
    border:0;
    background:none;
    grid-auto-columns: 6rem;
}

`;

const StoriesContainer = ({ children }) => {
    const isScreenWidth400pxOrLess = useMediaQuery({
        maxWidth:400
    });

    return (
        isScreenWidth400pxOrLess ? <Container
        slidesPerView={4}
        spaceBetween={25}
        freeMode
        modules={[FreeMode]}
        mousewheel

        >
            
            {
                children
            }
            
        </Container> 
        : <Container1>{children}</Container1>
    )
};
export default StoriesContainer;