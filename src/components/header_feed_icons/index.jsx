import { styled } from "styled-components";

const PlusIcon = styled.div`
    width:1.5rem;
    height:1.5rem;
    border-radius:30%;
    border:2px solid black;
    position:relative;
    
    
    &:before{
        content: "";
        position: absolute;
        width: 16px;
        display: inline-block;
        height: 2px;
        background-color: black;
        left: 10%;
        top: 45%;
    }
    &:after{
        
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: black;
    top: 45%;
    left: 10%;
    transform: rotate(90deg);
    }
`,
    HeartIcon = styled.div`
    
width:1rem;
height:1rem;
position:relative;
transform:rotate(316deg);
&:before{
    content:"";
    position:absolute;
    height:150%;
    width:100%;
    border:2px solid black;

    border-top-left-radius:50%;
    border-top-right-radius:50%;
    left:0;
    border-right:0;
    background:${props=>(props.$like && "red")|| ""};
    transition:background .2    s linear;

}
&:after{
    content: "";
    position: absolute;
    height: 150%;
    width: 100%;
    border: 2px solid black;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(90deg);
    left: 33%;
    border-left: 0;
    top: 32%;
    background:${props=>(props.$like && "red")|| ""};
    transition:background .2s linear;

}

`;
export { PlusIcon, HeartIcon };