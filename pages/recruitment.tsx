import React from "react";
import Layout from "../components/Layout/index";
import { List, Header, Container } from "semantic-ui-react";
import Head from 'next/head'
export default function Recruitment() {
  return (
    <Layout>
      <Head> Найм войск </Head>
      <Container text>
        <Header as="h1">Найм войск</Header>
        <p>
          Найм войск может произойти в двух случаях
          <List bulleted>
            <List.Item>
              Розыгрыш приказа "Усиление власти" 👑 со звездой в замке или
              крепости
            </List.Item>
            <List.Item>
              Выпала карта "сбор войск" в фазе вестероса. Каждый игрок в порядке
              очереди по треку железного трона производит найм войск в каждой
              своей крепости и замке.
            </List.Item>
          </List>
        </p>
        <p>
          Крепости и замки приносят Дому очки сбора, за них Дом набирает отряды
          в этих землях. Каждая крепость приносит 2 очка сбора. Каждый замок
          приносит 1 очко сбора. Стоимость сбора отряда зависит от его типа:
        </p>
        <List>
          <List.Item>Пехотинец 🚶‍️ — 1 очко сбора.</List.Item>
          <List.Item>Рыцарь ♘ — 2 очка сбора. </List.Item>
          <List.Item>Корабль ⛵ — 1 очко сбора.</List.Item>
          <List.Item>Башня 🚎 — 2 очка сбора.</List.Item>
          <List.Item>
            Посвятить пехотинца 🚶‍️ в рыцари ♘ - 1 очко сбора
          </List.Item>
          <List.Item>
            Превратить пехотинца 🚶‍️ в башню 🚎- 1 очко сбора
          </List.Item>
        </List>
        <p>
          Новые войска ставятся в соответствии с пределом снабжения. Корабли ⛵
          можно ставить в ЛЮБЫЕ моря, смежные с землей, на которой проходит найм
          войск, а также в порт, если такой есть
        </p>
      </Container>
    </Layout>
  );
}
