import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../providers/auth";

import WarningScreen from "../components/WarningScreen";

export default function SignUp() {


    const navigate = useNavigate();
    const { triggerWarning, setTriggerWarning } = React.useContext(AuthContext);
    const initialValue = {
        name: "",
        email: "",
        password: "",
        confirm: "",
    };
    const [inputs, setInputs] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target;

        setInputs({ ...inputs, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();
        if (inputs.password !== inputs.confirm) {
            setTriggerWarning("triggered");
        }
    }

    console.log({ inputs });

    return (
        <>
            <Container triggered={triggerWarning}>
                <Title>
                    <h1>MyWallet</h1>
                </Title>
                <Form onSubmit={onSubmit}>
                    <Input placeholder="Nome" name="name" type="text" onChange={onChange} />
                    <Input placeholder="E-mail" name="email" type="email" onChange={onChange} />
                    <Input placeholder="Senha" name="password" type="password" onChange={onChange} />
                    <Input placeholder="Confirme a senha" name="confirm" type="password" onChange={onChange} />
                    <Button type="submit">
                        <p>Cadastrar</p>
                    </Button>
                    <Login onClick={() => navigate("/")}>
                        <h2>Já tem uma conta? Entre agora!</h2>
                    </Login>
                </Form>
            </Container>
            {triggerWarning && <WarningScreen />}
        </>

    );

}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #8C11BE;
    padding: 25px;
    filter: brightness(${props => props.triggered ? "0.3" : "1"});

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 2;
`
const Title = styled.div`
    h1{
        font-family: 'Saira Stencil One', cursive;
        color: #FFFFFF;
    }
    margin-bottom: 25px;
`
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
const Login = styled.div`
    h2{
        font-size: 15px;
        font-weight: 700;
        color: #FFF;
    }
    margin-top: 36px;
`