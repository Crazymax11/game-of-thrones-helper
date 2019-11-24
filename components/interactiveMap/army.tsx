import React, { JSXElementConstructor } from "react";
import { ArmyUnit } from "./types";

import Catapult from "./units/catapult";
import Knight from "./units/knight";
import Ship from "./units/ship";
import Soldier from "./units/soldier";

const ComponentMapper: Record<ArmyUnit, JSXElementConstructor<any>> = {
  soldier: Soldier,
  ship: Ship,
  tower: Catapult,
  knight: Knight
};

export default (props: {
  startX: number | string;
  startY: number | string;
  units?: ArmyUnit[];
}) => {
  const { startX, startY, units = [] } = props;
  return (
    <g>
      {units.map((unit, i) => {
        const Component = ComponentMapper[unit];
        return (
          <Component
            x={Number(startX) + (i % 2) * 85}
            y={Number(startY) + (Math.floor(i/2)) * 85}
          />
        );
      })}
    </g>
  );
};
