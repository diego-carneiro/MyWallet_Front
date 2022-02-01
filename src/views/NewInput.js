import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


import Header from "../components/Header";
import ActionButton from "../components/ActionButton";

export default function NewInput() {

    return(
        <Container>
            <Header title={"Nova entrada"} icon={"return"}/>
            <Input placeholder="Valor"/>
            <Input placeholder="Descrição"/>
            <ActionButton action={"Salvar entrada"} path={"/main-menu"}/>
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
const Input = styled.input`
    width: 100%;
    height: 58px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    padding: 15px;
    color: #000000;
    margin-bottom: 13px;

    ::placeholder{
        color: #000000;
    }
`