import React from "react";
import styled from "styled-components";

export default function PurchaseLog({ title }) {

    return (

        <Container>
            <h1>Não há registros de<br />entrada ou saída</h1>

        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    height: 446px;
    background-color: #FFF;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 20px;
        color: #868686;
        text-align: center;
    }
`