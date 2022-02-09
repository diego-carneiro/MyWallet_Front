import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import ActionButton from "../components/ActionButton";

export default function NewInput() {

    const navigate = useNavigate();

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

        const promise = axios.post("http://localhost:5000/new-expense/", inputs,
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
        <Container>
            <Header title={"Nova entrada"} icon={"return"} />
            <Form onSubmit={onSubmit}>
                <Input placeholder="Valor" type="number" name="value" onChange={onChange} />
                <Input placeholder="Descrição" type="text" name="description" onChange={onChange} />
                <ActionButton type="submit" action={"Salvar entrada"} />
            </Form>
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