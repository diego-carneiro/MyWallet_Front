import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import PurchaseLog from "../components/PurchaseLog";
import ButtonLayer from "../components/ButtonLayer";

export default function MainMenu() {

    const navigate = useNavigate();

    const [user] = useState(() => {
        const userStorage = localStorage.getItem("user");
        return (JSON.parse(userStorage));
    });
    const [token, setToken] = useState(() => {
        const tokenStorage = localStorage.getItem("userToken");
        return ((tokenStorage));
    });
    const [infos, setInfos] = useState("");

    useEffect(() => {
        const promise = axios.get("https://api-my-wallet-t4.herokuapp.com/expense-control/",
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );
        promise.then(response => {
            setInfos(response.data);
        });
        promise.catch(error => console.log(error))
    }, []);   

    return (
        <Container>
            <Header title={`Olá, ${user.name}`} />
            <PurchaseLog infos={infos}/>
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