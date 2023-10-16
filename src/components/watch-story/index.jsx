import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
    background-color: #232323;
    width: 100vw;
    position: fixed;
    z-index: 12312;
    top: 0;
    left: 0;
    `,
    Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    max-width: 320px;
    margin: 0 auto;
    `,
    fillBar = keyframes`
    from{
        width:0;
    }
    to{
        width:98%;
    }
    `,
    LoadingBar = styled.div`
        
    width: 0;
    margin: 0 auto;
    background-color: #fff;
    position: absolute;
    height: .4%;
    top: 0;
    max-width: inherit;
    animation: ${fillBar} 5s linear;
    `,
    TopPanel = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    max-width: 320px;
    padding: 2% 0 0 2%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 2fr;
    align-items: center;
    justify-items: center;
    `,
    Image = styled.img`
    width: 100%;
    height: 100%;
    `,
    UserPhotoContainer = styled.div`
    width:100%;
    height:100%;
    `,
    UserPhoto = styled(Image)`
    
        width: 100%;
        height: 100%;
        border-radius: 50%;
    `,
    Username = styled.div`
    margin: 0 5%;
    font-size: .9rem;
    color: #fff;`,
    StoryTime = styled.div`
    color: #a7a7a7;
    `,
    OptionsContainer = styled.div`
    width:100%;
    `,
    Options = styled.div`
    display: flex;
    justify-content: space-evenly;`,
    Option = styled.div`
    width:1.5rem;
    cursor:pointer;
    `,
    StoryImage = styled.img`
    @media (min-width:300px){
        height:100%;
    }
    `,
    BottomPanel = styled(TopPanel)`
        
    top: unset;
    bottom: 2vh;
    
    position: absolute;
    display: flex;
    width: 100%;
    max-width: 320px;
    padding: 2% 0 0 2%;
    `,
    CommentContainer = styled.div`
    height:2.2rem;
    `,
    CommentInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    border: 1px solid #d0d0d0;
    background: none;
    padding-left:10%;
    color: #d0d0d0;`,
    BottomPanelOptionsContainer = styled(OptionsContainer)`
        flex-grow: 1;
        width:0;
    `
const WatchStory = ({close}) => {

    return <MainContainer>
        <Container>
            <LoadingBar onAnimationEnd={close}/>
            <TopPanel>
                <UserPhotoContainer>
                    <UserPhoto src="/ig.jpg" />
                </UserPhotoContainer>
                <Username>cristian.dev01</Username>
                <StoryTime>22 h</StoryTime>
                <OptionsContainer>
                    <Options>
                        <Option>
                            <Image src="op-icon.png" />
                        </Option>
                        <Option>
                            <Image src="close-icon.png" />
                        </Option>
                    </Options>
                </OptionsContainer>
            </TopPanel>
            <StoryImage src='story-image.png' />
            <BottomPanel>
                <CommentContainer>
                    <CommentInput placeholder="Enviar Mensaje" type="text" />
                </CommentContainer>
                <BottomPanelOptionsContainer>
                    <Options>
                        <Option>
                            <Image src="/heart-icon.png" />
                        </Option>
                        <Option>
                            <Image src="/share-icon.png" />
                        </Option>
                    </Options>
                </BottomPanelOptionsContainer>
            </BottomPanel>
        </Container>
    </MainContainer>
}

export default WatchStory;