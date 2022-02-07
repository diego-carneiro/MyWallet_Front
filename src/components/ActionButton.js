import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NewInput({ action, path }) {

    const navigate = useNavigate();

    return(
        <Button>
            <p>{action}</p>
        </Button>
    );
}
// ::::::::::Styled-Components::::::::::
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