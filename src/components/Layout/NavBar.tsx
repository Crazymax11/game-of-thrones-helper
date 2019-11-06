import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding-top: 20px;
  box-shadow: 3px 0px 0px 0px gray;
  height: 100%;
  max-width: 240px;
  display: inline-flex;
  flex-direction: column;
  justify-content: start;
  padding-right: 10px;
  background-color: white;
`;



const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left:15px;
  margin-bottom: 15px;
  color: blue !important;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
`;

export default function NavBar() {
  return (
    <Wrapper>
      <StyledLink to="/orders/support">✊ Приказ поддержки </StyledLink>
      <StyledLink to="/orders/might">👑 Приказ услиения власти</StyledLink>
      <StyledLink to="/orders/attack">🗡️ Приказ похода</StyledLink>
      <StyledLink to="/orders/defense">🛡️ Приказ обороны</StyledLink>
      <StyledLink to="/orders/raid">🔥 Приказ набега</StyledLink>
      <StyledLink to="/battle">⚔️ Бой</StyledLink>
      <StyledLink to="/recruitment">💂 Найм Войск</StyledLink>
      <StyledLink to="/round-order">🗺️ Порядок хода</StyledLink>
      <StyledLink to="/glossary"> 📚 Глоссарий</StyledLink>
    </Wrapper>
  );
}
