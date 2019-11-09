import OrderDescription from "./index";
import React from "react";

import markImage from "./defenseOrder.png";

const description = `Приказ обороны`;

const shortFacts = [
  "Приказ обороны дает армии бонус к боевой силе в случае обороны.",
  "Приказ обороны даёт бонус против любого количества атак в течение раунда.",
  "Цифра на приказе означает бонус к боевой силе."
];

export default function DefenseOrderDescription() {
  return (
    <OrderDescription
      title="Приказ обороны"
      facts={shortFacts}
      orderDescriptionText={description}
      orderMarkImage={markImage}
    />
  );
}
