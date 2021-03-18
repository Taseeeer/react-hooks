import React, { useEffect } from "react";
import styled from "styled-components";
import { FiArrowUp } from "react-icons/fi";

const HeaderStyled = styled.div`
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: 1.2rem;
    flex-direction: column;
    align-items: center;

    button {
        padding: 0.7rem;
        color: whitesmoke;
        background-color: darkred;
        border: none;
        cursor: pointer;
        text-align: center;
    } 
`;

export default function Header({ user, setUser }) {

    return(
        <HeaderStyled>
            <h2>Welcome, {user}!</h2>
            <button onClick={() => setUser("")}>Logout <span><FiArrowUp /></span></button>
        </HeaderStyled>
    );
};