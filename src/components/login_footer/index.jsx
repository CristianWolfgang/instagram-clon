import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Footer = styled.footer`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width:84%;
    margin:3rem auto ;
    @media only screen and (min-width:404px){
        width:98%;
    }
`,
StyledFooterItem = styled(Link)`
    text-decoration:none;
    
    font-size: .7rem;
    margin: 0.2rem;
    font-weight:500;
    color:var(--ig-secondary-text);
    padding:.2rem;
    display:block;
`,
Copyright = styled.div`
display:flex;
align-items:center;
font-size:.8rem;
margin:.5rem;
font-weight:500;
color:var(--ig-secondary-text);
padding:.2rem;
@media only screen and (min-width:544px){
    position:relative;
}
`,
SelectLang =styled.select`
    
    border: none;
    color: var(--ig-secondary-text);
`,
FooterItem=({text})=>{
    return(
        <div>
            <StyledFooterItem>{text}</StyledFooterItem>
        </div>);
};
const LoginFooter = ()=>{
    return (
        <>
        <Footer>
            <FooterItem text="Meta"/>
            <FooterItem text="Información"/>
            <FooterItem text="Blog"/>
            <FooterItem text="Empleo"/>
            <FooterItem text="Ayuda"/>
            <FooterItem text="API"/>
            <FooterItem text="Privacidad"/>
            <FooterItem text="Condiciones"/>
            <FooterItem text="Cuentas destacadas"/>
            <FooterItem text="Ubicaciones"/>
            <FooterItem text="Instagram Lite"/>
            <FooterItem text="Threads"/>
            <FooterItem text="Subir contactos y no usuarios"/>
            <FooterItem text="Meta Verified"/>
            <Copyright>
                <SelectLang>
                    <option value="">Español</option>
                </SelectLang>
                
                © 2023 Instagram from Meta
            </Copyright>
            {/* © 2023 Instagram from Meta */}
        </Footer>

        </>
    );
};
export default LoginFooter;