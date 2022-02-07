import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";

import ActionButton from "../components/ActionButton";

export default function Login() {

    const navigate = useNavigate();
    const { triggerWarning, setTriggerWarning } = React.useContext(AuthContext);

    const initialValue = {
        email: "",
        password: "",
    }
    const [inputs, setInputs] = useState(initialValue);

    function onChange(ev) {
        const { name, value } = ev.target

        setInputs({ ...inputs, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        const promise = axios.post("http://localhost:5000/sign-in/", inputs);
        promise.then(response => {
            navigate("/main-menu");
        });
        promise.catch(error => alert(error));
    }

    return (
        <>
            <Container triggered={triggerWarning}>
                <Title>
                    <h1>MyWallet</h1>
                </Title>
                <Form onSubmit={onSubmit}>
                    <Input placeholder="E-mail" type="text" name="email" onChange={onChange} />
                    <Input placeholder="Senha" type="password" name="password" onChange={onChange} />
                    <ActionButton action={"Entrar"} type="submit"/>
                    <SignUp onClick={() => navigate("/sign-up")}>
                        <h2>Primeira vez? Cadastre-se!</h2>
                    </SignUp>
                </Form>
            </Container>
        </>

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
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
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