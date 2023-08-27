import { styled } from "styled-components";
import Image from "../image";
import { Link } from "react-router-dom";

const DownloadCard = styled(Link)`
    width:40%;
    height:3rem;
`,
    CardContainer = styled.div`
    margin-top:2rem;
    display:flex;

    justify-content: space-evenly;`,
Container=styled.div`
    text-align:center;
`
const DownloadApp = () => {

    return (
        <Container>
            Descarga la app.
            <CardContainer>
                <DownloadCard><Image src="https://static.cdninstagram.com/rsrc.php/v3/yT/r/0BpxdgM3WUr.png" /></DownloadCard>
                <DownloadCard><Image src="https://static.cdninstagram.com/rsrc.php/v3/y9/r/LjIQEL8csb0.png" /></DownloadCard>

            </CardContainer>
        </Container>
    );
};
export default DownloadApp;