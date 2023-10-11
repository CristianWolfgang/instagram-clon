import { styled } from "styled-components";
import swipe from "./swipe";
import { useMediaQuery } from "react-responsive";

const Component = styled.div`
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
margin-left:${props=>props.$paddingLeft && "-1990px"};
padding-left:${props => props.$paddingLeft + "px"};
padding-right:${props=>props.$paddingLeft  && "2000px"};
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

    
        const {
            touchStartHandler,
            touchHandler,
            moveInX
        } = swipe();
        return isScreenWidth400pxOrLess ?<Component
            onTouchMove={touchHandler}
            onTouchStart={touchStartHandler}
            $paddingLeft={moveInX}

        >
            {children}
        </Component> :<Component>{children}</Component>
    
};
export default StoriesContainer;