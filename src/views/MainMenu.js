import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import PurchaseLog from "../components/PurchaseLog";
import ButtonLayer from "../components/ButtonLayer";

export default function MainMenu() {

    const navigate = useNavigate();

    const name = "Zé"

    return (
        <Container>
            <Header title={`Olá, ${name}`} />
            <PurchaseLog />
            <ButtonLayer />
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