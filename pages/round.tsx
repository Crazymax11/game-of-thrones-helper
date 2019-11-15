import React from "react";
import Layout from "../components/Layout/index";
import { Header, Container, Divider } from "semantic-ui-react";
import Head from 'next/head'

const steps = [
  {
    title: "Фаза Вестероса (кроме первого раунда)",
    text:
      "Мир не стоит на месте, в нем происходят события. Игроки тянут карты из колод Вестероса. Если на карте есть жетон одичалых - нужно продвинуть жетон на одно деление по треку одичалых. Если значение достигло 12 - немедленно защищаемся от нашествия одичалых. Читаем карту."
  },
  {
    title: "Фаза замыслов",
    text:
      "Игроки в закрытую расставляют приказы для своих армий. Правила рекомендуют ставить приказы всем армиям, даже если это может не иметь смысла (сбор власти в море). Игрокам следует договариваться друг с другом в этой фазе."
  },
  {
    title: "Фаза раскрытия замыслов",
    text: "Игроки раскрывают свои приказы."
  },
  {
    title: "Фаза ворона",
    text:
      "Владелец посыльного ворона в праве либо поменять 1 из своих приказов на другой из запаса, либо посмотреть в закрытую верхнюю карту колоды одичалых. Либо пропустить эту фазу."
  },
  {
    title: "Фаза действий: набег",
    text: "Игроки в порядке трека железного трона разыгрывают набеги"
  },
  {
    title: "Фаза действий: походы",
    text: "Игроки в порядке трека железного трона разыгрывают походы"
  },
  {
    title: "Фаза действий: усиление власти",
    text: "Игроки в порядке трека железного трона разыгрывают усиление власти"
  },
  {
    title: "Завершение",
    text:
      "Игроки собирают приказы с армий, восстанавливают беглецов и считают замки"
  }
];

export default () => {
  return (
    <Layout>
      <Head>
        <title>Порядок хода</title>
      </Head>
      <Container text>
        <Header as="h1"> Порядок хода! </Header>
        {steps.map(({ title, text }) => {
          return (
            <Container text>
              <Divider />
              <Header as="h2"> {title} </Header>
              <p> {text} </p>
            </Container>
          );
        })}
      </Container>
    </Layout>
  );
};
