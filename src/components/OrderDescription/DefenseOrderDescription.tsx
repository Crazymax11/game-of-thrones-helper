import OrderDescription from "./index";
import React from "react";

import markImage from './defenseOrder.png';

const description = `
Приказ обороны дает армии бонус к боевой силе в случае обороны. Приказ обороны даёт бонус против любого количества атак в течение раунда. Цифра на приказе означает бонус к боевой силе.
`;

const examples:  Array<{title: string, image: string, text: string, type: 'bad'| 'good'}> = [
  {
    title: 'О-О-О-О Моя обороооона',
    type: 'good',
    text: 'Баратеон чувствует, что сейчас в Королевской Гавани будет махач! И Ланистер и Мартел и Тирел и Старк хотят забрать себе эту землю и при этом никто не хочет помогать другому. Баратеон ставит приказ обороны +2 и начинается его оборона. Так как приказ обороны работает бесчисленное количество битв, Баратеон без труда обороняется от четырех атак, благодаря +2 силы от приказа обороны',
    image: '11'
  }
]

export default function DefenseOrderDescription() {
  return <OrderDescription orderDescriptionText={description} examples={examples} orderMarkImage={markImage}/>;
}
