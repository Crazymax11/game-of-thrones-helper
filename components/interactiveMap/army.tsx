import React, { JSXElementConstructor } from "react";
import { ArmyUnit, Owner } from "./types";

import Unit from './units/Unit';

export default (props: {
  startX: number | string;
  startY: number | string;
  units?: ArmyUnit[];
  size?: number;
  owner: Owner;
}) => {
  const { startX, startY, units = [], size = 80, owner} = props;
  return (
    <g>
      {units.map((unit, i) => {
        return (
          <Unit
            x={Number(startX) + (i % 2) * 85}
            y={Number(startY) + (Math.floor(i/2)) * 85}
            size={size}
            unit={unit}
            owner={owner}
          />
        );
      })}
    </g>
  );
};
