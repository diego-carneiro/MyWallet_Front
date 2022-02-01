import React from "react";
import styled from "styled-components";

export default function PurchaseLog({ title }) {

    return(

        <Container>
            <h1>Não há registros de entrada ou saída</h1>

        </Container>
    );
}
// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    height: 446px;
    background-color: #FFF;
    border-radius: 5px;
`