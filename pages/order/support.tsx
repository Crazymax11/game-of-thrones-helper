import OrderDescription from "../../components/orderComponent";
import Layout from "../../components/Layout/index";
import React from "react";
import Head from 'next/head'
const description = `Армия, получившая приказ поддержки, может участвовать в боях в соседних территориях`;

const shortFacts = [
  "Поддержка ✊ оказывается в любом количестве сражений в течение раунда пока активен приказ",
  "Игрок, контролирующий армию, сам решает, стоит армии участвовать в сражении или нет",
  "Армия, которая помогает, не может нести потери из-за мечей и не считается проигравшей в случае поражения стороны, которой она помогала",
  "Флот ⛵ может помочь сражению смежной земле",
  "Флот ⛵в порту может помочь битве в смежном море",
  "Число на приказе означает бонус к боевой силе армии, оказывающей поддержку",
  "👎 Армия не может помочь флоту ⛵",
  "👎 Флот ⛵ в порту не может помочь битве в городе"
];

export default function SupportOrderDescription() {
  return (
    <Layout>
      <Head><title>Приказ поддержки</title></Head>
      <OrderDescription
        title="Приказ поддержки"
        facts={shortFacts}
        orderDescriptionText={description}
        orderMarkImage="/images/supportOrder.png"
      />
    </Layout>
  );
}
