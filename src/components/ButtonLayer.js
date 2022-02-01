import React from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"
import { IconContext } from "react-icons";

export default function ButtonLayer() {

    return (

        <Container>
            <Button>
                <IconContext.Provider value={{ color: "white", size: "22px" }}>
                    <AiOutlinePlusCircle />
                    <p>Nova<br/>entrada</p>
                </IconContext.Provider>
            </Button>
            <Button>
                <IconContext.Provider value={{ color: "white", size: "22px" }}>
                    <AiOutlineMinusCircle />
                    <p>Nova<br/>saída</p>
                </IconContext.Provider>
            </Button>
        </Container>
    );
}


// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    margin-top: 15px;

    display: flex;
    justify-content: space-between;

    h1{
        font-size: 26px;
        font-weight: 700;
        color: #FFF;
    }
`
const Button = styled.div`
    width: 155px;
    height: 114px;
    border-radius: 5px;
    padding: 10px;
    background-color: #A328D6;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p{
        font-size: 17px;
        font-weight: 700;
        color: #FFF;
    }
`