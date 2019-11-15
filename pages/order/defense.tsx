import OrderDescription from "../../components/orderComponent";
import Layout from "../../components/Layout/index";
import React from "react";
import Head from 'next/head'
const description = `Приказ обороны`;

const shortFacts = [
  "Приказ обороны дает армии бонус к боевой силе в случае обороны.",
  "Приказ обороны даёт бонус против любого количества атак в течение раунда.",
  "Цифра на приказе означает бонус к боевой силе."
];

export default function DefenseOrderDescription() {
  return (
    <Layout>
      <Head><title>Приказ обороны</title></Head>
      <OrderDescription
        title="Приказ обороны"
        facts={shortFacts}
        orderDescriptionText={description}
        orderMarkImage="/images/defenseOrder.png"
      />
    </Layout>
  );
}
