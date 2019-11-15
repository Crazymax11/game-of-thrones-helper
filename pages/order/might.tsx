import OrderDescription from "../../components/orderComponent";
import Layout from "../../components/Layout/index";
import React from "react";
import Head from 'next/head'
const description = `Приказ усиления власти позволяет получать жетоны власти и нанимать войска.`;

const shortFacts = [
  'Если приказ отдан армии, то в стадии "сбора власти" игрок получает жетон власти 💰 за приказ и по одному жетону власти 💰 за каждую корону на земле, на которой стоит.',
  "Если приказ со звездочкой 🌟 отдан армии в замке или крепости, игрок принимает решение - собрать жетоны власти 💰 или нанять войска.",
  "Если приказ отдан флоту ⛵ в порту, то он считается торговым флотом и игрок получает 1 жетон власти 💰, если только смежное море не занято вражеских флотом ⛵",
  "Если приказ отдан флоту ⛵ в море, то ничего не происходит.",
  "Если сожгут 🔥 ваш приказ усиления власти, вы потеряете один жетон власти, а соперник получит 1 жетон власти 💰"
];

export default function MightOrderDescription() {
  return (
    <Layout>
      <Head><title>Приказ усиления власти</title></Head>
      <OrderDescription
        title="Приказ усиления власти"
        facts={shortFacts}
        orderDescriptionText={description}
        orderMarkImage="/images/mightOrder.png"
      />
    </Layout>
  );
}
