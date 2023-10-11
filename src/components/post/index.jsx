import { styled } from "styled-components";
import POSTS from "../../posts";
import InstagramClon from "../postImages/InstagramClon";
import Technologies from "../postImages/Technologies";
import SocialMedia from "../postImages/SocialMedia";
import Image from "../image";
import { HeartIcon } from "../header_feed_icons";
import { useState } from "react";

const Post = styled.div`
    margin-top:1rem;
    @media (min-width: 500px) {
        width:450px;
        margin:1rem auto;
    }
    @media (min-width: 768px) {
        margin:2rem auto;

    }
    @media (min-width: 1024px) {
        width:500px;
    }
    @media (min-width: 1440px) {
        margin-left:43%;
    }
    `,
    PostUser = styled.div`
    display:flex;
    align-items: center;
    margin-bottom:.25rem;
`,
    UserImage = styled.div`
    border-radius:50%;
    width:2rem;
    height:2rem;

`,
    UserName = styled.div`

`,
    PostImage = styled.div`
    height:20rem;
    @media (min-width:1024px){
        width:500px;
        height:500px;
        font-size:1.5rem;
    }
`,
    PostPanel = styled.div`
    display:flex;
    justify-content: space-between;
    margin: 0.8rem 0;
    `,
    PanelIcon = styled.div`
    width:2rem;
    height:2rem;`,
    PanelIconContainer = styled.div`
        display:flex;
        width:40%;
        margin-left:2.5%;
        justify-content: space-between;
    `,
    LikesContainer = styled.div``,
    PostTitle = styled.div``,
    CommentsContainer = styled.div`

    `,
    TimeContainer = styled.div`
    opacity:.7;
    `;

    
const Posts = () => {
    const PostsList = POSTS.map((obj, index) => {

        const [like,setLike] = useState(false),
        handleLike = e=>{
            setLike(!like);
        };
        return (<Post key={index}>
            <PostUser>
                <UserImage>
                    <Image src="no-photo.jpg" />
                </UserImage>
                <UserName>
                    <strong>
                        &nbsp;
                        {obj.userName}
                        
                    </strong>
                    
                </UserName>
            </PostUser>
            <PostImage>
                {
                    (index === 0)
                        ? <InstagramClon />
                        : (index === 1)
                            ? <Technologies />
                            : (index === 2) && <SocialMedia />

                }
            </PostImage>
            <PostPanel>
                <PanelIconContainer>
                    <PanelIcon onClick={handleLike}>
                        <HeartIcon $like={like}/>
                    </PanelIcon>
                    <PanelIcon>
                        <Image src="comment-icon.png" />
                    </PanelIcon>
                    <PanelIcon>
                        <Image src="share-icon.png" />
                    </PanelIcon>
                </PanelIconContainer>
                    <PanelIcon>
                        <Image src="bookmark-icon.png" />
                    </PanelIcon>

            </PostPanel>
            <LikesContainer>
                <strong>
                    {obj.likes} Likes
                </strong>
            </LikesContainer>
            <PostTitle>
                <strong>{obj.userName}</strong>
                &nbsp;
                {obj.postTitle}
            </PostTitle>
            <CommentsContainer>
                read the {obj.comments} comments
            </CommentsContainer>
            <TimeContainer>
                {obj.postTime} ago
            </TimeContainer>
        </Post>);
    });
    return (<>

        {PostsList}
        <br/><br/>
    </>
    );
};
export default Posts;