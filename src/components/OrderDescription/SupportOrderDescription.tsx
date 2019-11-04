import OrderDescription from "./index";
import React from "react";

import markImage from './supportOrder.png';

const description = `Армия, получившая приказ поддержки, может участвовать в боях в соседних территориях`;

const shortFacts=  [
  'Поддержка ✊ оказывается в любом количестве сражений в течение раунда пока активен приказ',
  'Игрок, контролирующий армию, сам решает, стоит армии участвовать в сражении или нет',
  'Армия, которая помогает, не может нести потери из-за мечей и не считается проигравшей в случае поражения стороны, которой она помогала',
  'Флот ⛵ может помочь сражению смежной земле',
  'Флот ⛵в порту может помочь битве в смежном море',
  'Число на приказе означает бонус к боевой силе армии, оказывающей поддержку',
  '👎 Армия не может помочь флоту ⛵',
  '👎 Флот ⛵ в порту не может помочь битве в городе',
]


export default function SupportOrderDescription() {
  return <OrderDescription facts={shortFacts} orderDescriptionText={description} orderMarkImage={markImage}/>;
}
