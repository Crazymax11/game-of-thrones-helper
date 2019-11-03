
import React from 'react';
import styled from 'styled-components';

import {
    Link
  } from "react-router-dom";

const Wrapper = styled.div`
    box-shadow: 3px 0px 0px 0px gray;
    height: 100%;
    max-width: 240px;
    display: inline-flex;
    flex-direction: column;
    justify-content: start;
    padding-right: 10px;
    background-color: white;
`

export default function NavBar() {
    return <Wrapper>
        <Link to="/orders/support"> Приказ поддержки </Link>
        <Link to="/orders/might"> Приказ услиения власти</Link>
        <Link to="/orders/attack">Приказ похода</Link>
        <Link to="/orders/defense">Приказ обороны</Link>
        <Link to="/orders/raid">Приказ набега</Link>
        <Link to="/battle">Бой</Link>
        <Link to="/recruitment">Найм Войск</Link>
    </Wrapper>
}
