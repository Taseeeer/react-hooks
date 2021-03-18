import React, { useState } from "react";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";

const PostStyled = styled.div`
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;

    button {
        padding: 0.7rem;
        color: whitesmoke;
        background-color: rgb(28, 113, 199);
        border: none;
        cursor: pointer;
    }

    input {
        padding: 0.5rem;
        width: 80%;
        background-color: whitesmoke;
        margin: 0.3rem 0 0 -1rem;
    }

    img {
        width: 250px;
        height: 200px;
    }

`;

export default function CreatePost({ user, setPosts, posts }) {

    const [content, setContent] = useState("");
    const [image, setImg] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const post = {
            content,
            image,
            user,
        };

        const newPosts = [post, ...posts];

        setPosts(newPosts);

    }

    return(
        <PostStyled>
            <h1>Create new post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Post Content" onChange={e => setContent(e.target.value)} />
                <br />
                <input type="file" onChange={e => setImg(e.target.files[0])}/>
                <button type="submit">Submit Post <span><FiCheck /></span></button>
            </form>
        </PostStyled>
    );
};