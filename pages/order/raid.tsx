import OrderDescription from "../../components/orderComponent";
import Layout from "../../components/Layout/index";
import React from "react";
import Head from 'next/head'
const description = `Приказ набега позволяет армии заняться грабежом, диверсией, саботажем и прочими приятными штуками.`;

const shortFacts = [
  "При розыгрыше приказа игрок вместе с приказом набега 🔥 снимает приказ набега 🔥, подмоги ✊ или усиления власти 👑 другого игрока из соседней земли.",
  "Если применен приказ набега 🔥 со звездой 🌟, то также можно снять приказ обороны 🛡️.",
  "Флот ⛵ в море может совершать набег 🔥 на соседние моря, смежный порт и смежные земли",
  "Армия может совершать набег 🔥 на соседние земли",
  "Флот ⛵ в порту может совершать набег 🔥 на смежное море",
  "Если игрок снимает приказ усиления власти 👑, то игрок, потерявший приказ усиления власти теряет один жетон власти 💰, а игрок, разыгравший приказ, получает один жетон власти 💰 (даже если другой игрок ничего не потерял).",
  "👎 Армия не может совершать набег на флот ⛵"
];

export default function RaidOrderDescription() {
  return (
    <Layout>
      <Head><title>Приказ набега</title></Head>
      <OrderDescription
        title="Приказ набега"
        facts={shortFacts}
        orderDescriptionText={description}
        orderMarkImage="/images/raidOrder.png"
      />
    </Layout>
  );
}
