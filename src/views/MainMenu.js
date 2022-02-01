import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

export default function MainMenu() {

    const navigate = useNavigate();

    return (
        <Container>
            <Header title={"Olá, Fulano"}/>

        </Container>
    );

}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #8C11BE;
    padding: 25px;

    display: flex;
    flex-direction: column;
`