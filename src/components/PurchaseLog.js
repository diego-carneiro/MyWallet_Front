import React from "react";
import styled from "styled-components";

export default function PurchaseLog({ infos }) {

    console.log(infos);

    return (
        <>
            {infos.length === 0 ?
                <Container>
                    <h1>Não há registros de<br />entrada ou saída</h1>
                </Container>
                :
                <FilledContainer>
                    {infos.map((items) => (
                        <PurchaseBox>
                            <h1>{items.date}</h1>
                            <Description>{items.description}</Description>
                            <h2>{items.value}</h2>
                        </PurchaseBox>
                    ))}
                </FilledContainer>
            }
        </>
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
const FilledContainer = styled.div`
    width: 100%;
    height: 446px;
    padding: 24px 12px 10px 12px;
    background-color: #FFF;
    border-radius: 5px;  
`
const PurchaseBox = styled.div`
    width: 100%;
    height: 20px;
    
    display: flex; 
    justify-content: space-between;
    
    h1{
        font-size: 16px;
        color: #C6C6C6;
    }
  
    h2{ 
        font-size: 16px;
        color: #03AC00;
    }
`
const Description = styled.div`
    width: 100%;   
    margin-left: 7px;
    margin-right: 7px;

    p{
        font-size: 16px;
        color: #000;
    }
`