import React from "react";
import styled from "styled-components";

export default function Header({ title }) {

    return(

        <Container>
            <h1>{title}</h1>

        </Container>
    );
}


// ::::::::::Styled-Components::::::::::
const Container = styled.div`
    width: 100%;
    h1{
        font-size: 26px;
        font-weight: 700;
        color: #FFF;
    }
`