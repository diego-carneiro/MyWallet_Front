import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    return (
        <Container>
            <Title>
                <h1>MyWallet</h1>
            </Title>
            <Input placeholder="Nome"/>
            <Input placeholder="E-mail"/>
            <Input placeholder="Senha"/>
            <Input placeholder="Confirme a senha"/>
            <Button>
                <p>Cadastrar</p>
            </Button>
            <SignUp onClick={() => navigate("/")}>
                <h2>Já tem uma conta? Entre agora!</h2>
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
`
const Button = styled.button`
    width: 100%;
    height: 46px;
    border-radius: 5px;
    background-color: #A328D6;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: 20px;
        font-weight: 700;
        color: #FFF;
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