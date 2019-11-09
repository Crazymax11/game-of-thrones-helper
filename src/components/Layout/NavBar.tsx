import React, { useState, ReactElement } from "react";
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

export default function NavBar({
  visible,
  onHide
}: {
  visible: boolean;
  onHide: Function;
}) {
  const [isOrdersExpanded, toggleIsOrdersExpanded] = useState(false);
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
        <MenuItem onClick={() => toggleIsOrdersExpanded(!isOrdersExpanded)}>
          Приказы
          {isOrdersExpanded && (
            <Menu.Menu>
              <MenuItem>
                <Link to="/orders/support"> ✊ Приказ поддержки </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/orders/might"> 👑 Приказ услиения власти </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/orders/attack"> 🗡️ Приказ похода </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/orders/defense"> 🛡️ Приказ обороны </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/orders/raid"> 🔥 Приказ набега </Link>
              </MenuItem>
            </Menu.Menu>
          )}
        </MenuItem>

        <MenuItem>
          <Link to="/battle"> ⚔️ Бой </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/recruitment"> 💂 Найм Войск </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/round-order"> 🗺️ Порядок хода </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/glossary"> 📚 Глоссарий </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/wildlings"> 👺 Одичалые </Link>
        </MenuItem>
      </Container>
    </Sidebar>
  );
}

const MenuItem = ({
  children,
  onClick = () => {}
}: {
  children: any;
  onClick?: Function;
}) => (
  <Menu.Item onClick={() => onClick()}>
    <Flex>{children}</Flex>
  </Menu.Item>
);

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
`;
