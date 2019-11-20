import React from "react";

import NextLink from "next/link";
import { Menu, Sidebar, Container } from "semantic-ui-react";

const Link = ({ children, href }: {children: string, href: string}) => (
  <NextLink href={href}>
    <a>{children}</a>
  </NextLink>
);

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
            <MenuItem>
              <Link href="/order/support"> ✊ Приказ поддержки </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/order/might"> 👑 Приказ услиения власти </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/order/attack"> 🗡️ Приказ похода </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/order/defense"> 🛡️ Приказ обороны </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/order/raid"> 🔥 Приказ набега </Link>
            </MenuItem>
          </Menu.Menu>
        </Menu.Item>

        <MenuItem>
          <Link href="/battle"> ⚔️ Бой </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/recruitment"> 💂 Найм Войск </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/round"> 🗺️ Порядок хода </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/tracks"> 🛣 Треки </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/wildlings"> 👺 Одичалые </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/interactive-map"> 🗺️ Интерактивная карта </Link>
        </MenuItem>
      </Container>
    </Sidebar>
  );
}

const MenuItem = ({ children }: { children: any; onClick?: Function }) => (
  <Menu.Item>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "flex-start"
      }}
    >
      {children}
    </div>
  </Menu.Item>
);
