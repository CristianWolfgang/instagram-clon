import { styled } from "styled-components";

const OrContainer = styled.div`
    display:flex;

    justify-content: space-evenly;
    align-items:center;
    width:80%;
    margin: 2rem auto 0;
    color:var(--ig-secondary-text);
    
    font-size: .8rem;
`,
Line = styled.div`
    border-top: 2px var(--ig-stroke) solid;
    width:40%;
`,
Or = ()=><OrContainer><Line/>O<Line/></OrContainer>;
export default Or;