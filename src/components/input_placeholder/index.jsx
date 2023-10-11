import { styled } from "styled-components";

const InputPlaceholder = styled.div`
    
position: absolute;
opacity: .6;
padding:.4rem;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

font-size: ${props => props.value ? ".65rem" : ".75rem"};
line-height: ${props => props.value ? ".5rem" : "1.5rem"};
transition: font-size linear .1s,
line-height linear .1s;
pointer-events:none;
`;
export default InputPlaceholder;