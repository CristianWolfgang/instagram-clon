import { useState } from "react";

const swipe = ()=>{
    const [moveInX,setmoveInX] = useState(2000),
    [touchStart,setTouchStart] = useState(0),
    [touchCurrent,setTouchCurrent] = useState(0),
    speed = 5;
    const touchStartHandler = e=>{
        setTouchStart(e.changedTouches[0].screenX +3);
    },
    touchHandler = e=>{
        setTouchCurrent(e.changedTouches[0].screenX +3);
        
        setmoveInX(moveInX=>{

            if(Math.abs(touchStart-touchCurrent) > 15 ){
                if((touchStart<touchCurrent) && moveInX<2000){
                    return moveInX+speed;
                }else if(touchStart>touchCurrent && moveInX> 1920){
                    return moveInX-speed;
                }
            }
            return moveInX;
        });
    }
    
    return {
        touchHandler,
        touchStartHandler,
        moveInX
    };
};
export default swipe;