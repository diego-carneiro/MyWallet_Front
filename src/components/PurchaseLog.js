import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import styled from "styled-components";

export default function PurchaseLog({ infos }) {

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        let count = 0;

        for (let e of infos) {
            if (e.type === "input"){
                count -= Number(e.value);
            } else {
                count += Number(e.value); 
            }
        }
        setBalance(count);

    }, [infos]);
    console.log(balance);

    return (
        <>
            {infos.length === 0 ?
                <Container>
                    <h1>Não há registros de<br />entrada ou saída</h1>
                </Container>
                :
                <FilledContainer>
                    {infos.map((items) => (
                        <PurchaseBox valueColor={items.type}>
                            <h1>{items.date}</h1>
                            <Description>{items.description}</Description>
                            <h2>{items.value}</h2>
                        </PurchaseBox>
                    ))}
                    <Balance valueColor={balance}>
                        <h3>SALDO</h3>
                        <p>{balance}</p>
                    </Balance>
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
    min-height: 446px;
    padding: 24px 12px 10px 12px;
    background-color: #FFF;
    border-radius: 5px;
    position: relative;    
    
    h3{
        font-size: 17px;
        font-weight: 700;
    }
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
        color: ${props => props.valueColor === "output" ? "#03AC00" : "#C70000"}
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
const Balance = styled.div`
    width: 92%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;

    p{
        font-size: 17px;
        color: ${props => props.valueColor > 0 ? "#03AC00" : "#C70000"}
    }
`