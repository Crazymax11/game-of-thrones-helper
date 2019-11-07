import React, { useState } from "react";
import { List, Header, Container, Icon,Divider } from 'semantic-ui-react'

export default () => {
  const [isWin, toggleWin] = useState(false);
  const [isLose, toggleLose] = useState(false);

  return (
    <Container text>
      <Header as="h1"> Одичалые </Header>
      <div>
        На оледенелом севере варварские племена одичалых готовятся к очередному
        походу на Вестерос. От вторжения диких орд (и других, более жутких
        пришельцев) Семь королевств защищают титаническая Стена и клинки братьев
        Ночного дозора. Однако без помощи Великих домов отразить нашествие не
        получится.
      </div>
      <Divider/>
      <div>
        Нашествие одичалых может произойти в фазе Вестероса, если случится одно
        из двух событий:
      </div>
      <List bulleted>
        <List.Item>
          жетон угрозы достигнет деления 12 на треке одичалых, либо
        </List.Item>
        <List.Item>
          будет вытянута и разыграна карта «Нашествие одичалых».
        </List.Item>
      </List>
      <Divider/>
      <Header as="h3">Как проходит нашествие одичалых</Header>
      <List bulleted>
        <List.Item> Игроки устраивают голосование.</List.Item>
        <List.Item>
          <span onClick={() => toggleWin(!isWin)}> <Icon name={isWin ? "angle double down" : "angle double right"}/> Если сила Ночного дозора равна силе одичалых или выше её</span>
          {isWin && <p>
            Вторжение отбито, варвары полегли под Стеной 🎉. Откройте верхнюю
            карту колоды одичалых, игрок,сделавший наибольшую ставку своей
            властью, получает награду, указанную в нижней части карты. Если
            таких игроков несколько, владелец железного трона выбирает одного.
            Переместите жетон одичалых на деление 0
          </p>}
        </List.Item>
        <List.Item>
          <span onClick={() => toggleLose(!isLose)}> <Icon name={isLose ? "angle double down" : "angle double right"}/> Если сила одичалых превзошла силу Ночного дозора </span>
          {isLose && <p>
            Варвары преодолевают Стену и разоряют лежащие за ней земли Семи
            королевств. Откройте вернюю карту колоды одичалых, игрок, сделавший
            наименьшую ставку своей властью несет тяжелые потери, а затем
            караются все остальнын. Если игроков, сделавших наименьшую ставку
            несколько, владелец железного трона выбирает одного. Переместите
            жетон одичалых на 2 деления вниз (но не меньше 0)
          </p>}
        </List.Item>
        <List.Item> Верните карту одичалых вниз колоды </List.Item>
      </List>
    </Container>
  );
};