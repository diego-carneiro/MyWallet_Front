import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../providers/auth";
import axios from "axios";

import Header from "../components/Header";
import ActionButton from "../components/ActionButton";
import WarningScreen from "../components/WarningScreen";

export default function NewOutput() {

    const navigate = useNavigate();
    const { triggerWarning, setTriggerWarning } = React.useContext(AuthContext);
    const initialValue = {
        value: "",
        description: "",
    }
    const [inputs, setInputs] = useState(initialValue);
    function onChange(ev) {
        const { name, value } = ev.target

        setInputs({ ...inputs, [name]: value });
    }

    const [token, setToken] = useState(() => {
        const tokenStorage = localStorage.getItem("userToken");
        return ((tokenStorage));
    });

    function onSubmit(ev) {
        ev.preventDefault();

        if (inputs.description === "") {
            setTriggerWarning("empty");
            return;
        }
        if (!inputs.value) {
            setTriggerWarning("valueMissing");
            return;
        }

        const promise = axios.post("https://api-my-wallet-t4.herokuapp.com/new-deposit/", inputs,
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            console.log(response.data);
            navigate("/main-menu");
        });
        promise.catch(error => alert(error));
    }

    return (
        <>
            <Container triggered={triggerWarning}> 
                <Header title={"Nova saída"} icon={"return"} />
                <Form onSubmit={onSubmit}>
                    <Input placeholder="Valor" type="number" name="value" onChange={onChange} />
                    <Input placeholder="Descrição" type="text" name="description" onChange={onChange} />
                    <ActionButton action={"Salvar saída"} path={"/main-menu"} />
                </Form>
            </Container>
            {triggerWarning === "empty" && <WarningScreen warningText={"Adicione uma descrição"} />}
            {triggerWarning === "valueMissing" && <WarningScreen warningText={"Adicione um valor"} />}
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
    position: fixed;
    z-index: 2;
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

    ::placeholder{
        color: #000000;
    }
`