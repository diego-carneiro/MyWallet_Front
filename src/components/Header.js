import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ImExit } from "react-icons/im";
import { BsArrowReturnLeft } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Header({ title, icon }) {

    const navigate = useNavigate();

    return (
        <Container>
            <h1>{title}</h1>
            <IconContext.Provider value={{ color: "white", size: "24px" }}>
                {icon ?
                    <BsArrowReturnLeft onClick={() => navigate("/main-menu")} />
                    :
                    <ImExit onClick={() => navigate("/")} />
                }
            </IconContext.Provider>
        </Container>
    );
}


// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    margin-bottom: 22px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        font-size: 26px;
        font-weight: 700;
        color: #FFF;
    }
`