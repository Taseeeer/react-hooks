import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const Outer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    form {
        margin: 1rem 0 0 1rem;
    }

    input {
        padding: 0.5rem;
        background-color: whitesmoke;
    }

    button {
        padding: 0.6rem;
        color: whitesmoke;
        background-color: rgb(28, 113, 199);
        border: none;
        
    }

`;
const LoginStyled = styled.div`
    color: whitesmoke;
    background-color: rgb(28, 113, 199);
    font-size: 1.6rem;
    font-family: monospace;
    display: inline-block;
    padding: 0.6rem 2rem;

`;

export default function Login({ setUser }) {

    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        setUser(username);
    }

    return(
        <Outer>
            <div>
                <LoginStyled className="login">
                <h2>Welcome devs</h2>
                </LoginStyled>
                <form onSubmit={handleSubmit}>
                    <input onChange={e => setUsername(e.target.value)} placeholder="Username?" className="for-input" />
                    <button type="submit" className="for-button">Login <span><FiArrowRight /></span></button>
                </form>
            </div> 
        </Outer>
    );
};