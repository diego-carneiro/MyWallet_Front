import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ActionButton from "../components/ActionButton";

export default function Login() {

    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                <h1>MyWallet</h1>
            </Title>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>
            <ActionButton action={"Entrar"} path={"main-menu"}/>
            <SignUp onClick={() => navigate("/signup")}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </SignUp>
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
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    h1{
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
    }
    margin-bottom: 25px;
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
const SignUp = styled.div`
    h2{
        font-size: 15px;
        font-weight: 700;
        color: #FFF;
    }
    margin-top: 36px;
`