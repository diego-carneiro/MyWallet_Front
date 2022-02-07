import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { IconContext } from "react-icons";
import { AuthContext } from "../providers/auth";

export default function WarningScreen({ warningText }) {

    const { setTriggerWarning } = React.useContext(AuthContext);

    return (
        <Container onClick={() => setTriggerWarning(null)}>
            <WarningBox>
                <h1>Aviso:<br/>{warningText}</h1>
            </WarningBox>
        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 3;
`
const WarningBox = styled.div`
    width: 248px;
    height: 210px;
    background-color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 18px;
        font-weight: 700; 
        text-align: center;
        color: black;
    }
`