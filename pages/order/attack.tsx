import OrderDescription from "../../components/orderComponent";
import Layout from "../../components/Layout/index";
import React from "react";
import Head from 'next/head'
const description = `Приказ похода позволяет армии передвигаться по Вестеросу, атаковать соперников и захватывать земли. Поход - главное действие в игре, поэтому используйте этот приказ с умом.`;

const shortFacts = [
  "Армия может перейти в соседнюю землю",
  "Армия может перейти в заморскую землю, если есть 'мостик' из кораблей",
  "Армия может разделится на сколько угодно частей и зайти в несколько территорий, если при этом не будет нарушен предел снабжения",
  "В результате похода может быть только одна битва",
  "Если армия полностью покидает землю, она может оставить жетон власти на этой земле. Подробнее на странице боя",
  "Флот ⛵ может перейти в соседние моря",
  "Флот ⛵ может перейти в смежный с морем порт",
  "Флот ⛵ из порта может перейти только в смежное море",
  "Игрок имеет право не использовать возможности приказа, просто перевернув жетон приказа"
];

export default function AttackOrderDescription() {
  return (
    <Layout>
      <Head><title>Приказ похода</title></Head>
      <OrderDescription
        title="Приказ похода"
        facts={shortFacts}
        orderDescriptionText={description}
        orderMarkImage="/images/attackOrder.png"
      />
    </Layout>
  );
}
