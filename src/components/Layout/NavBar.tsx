import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import {
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Label
} from "semantic-ui-react";

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
  margin-left: 15px;
  margin-bottom: 15px;
  color: blue !important;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default function NavBar({
  visible,
  onHide
}: {
  visible: boolean;
  onHide: Function;
}) {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      onHide={() => onHide()}
      vertical
      visible={visible}
    >
      <Container textAlign="left">
        <Menu.Item>
          Приказы
          <Menu.Menu>
            <Menu.Item>
              <Link to="/orders/support"> ✊ Приказ поддержки </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/orders/might"> 👑 Приказ услиения власти </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/orders/attack"> 🗡️ Приказ похода </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/orders/defense"> 🛡️ Приказ обороны </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/orders/raid"> 🔥 Приказ набега </Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Link to="/battle"> ⚔️ Бой </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/recruitment"> 💂 Найм Войск </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/round-order"> 🗺️ Порядок хода </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/glossary"> 📚 Глоссарий </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/wildlings"> 👺 Одичалые </Link>
        </Menu.Item>
      </Container>
    </Sidebar>
  );
}
