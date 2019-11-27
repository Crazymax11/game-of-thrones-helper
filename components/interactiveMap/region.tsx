import React, { useState } from "react";

import Army from "./army";
import { ArmyUnit, Owner } from "./types";
import { observer } from "mobx-react";

interface RegionDeclaration {
  id: string;
  armyStartX: number | string;
  armyStartY: number | string;
  svgPath: string;
}

interface Props {
  owner: Owner;
  army: ArmyUnit[];
  showControls(arg: { x: string | number; y: string | number }): void;
}
export default (region: RegionDeclaration) => (props: Props) => {
  return (
    <g className={`region _${props.owner}`}>
      <path
        className="region__form"
        onClick={() =>
          props.showControls({
            x: region.armyStartX,
            y: region.armyStartY
          })
        }
        id={region.id}
        fill="currentColor"
        stroke="black"
        strokeWidth="1"
        d={region.svgPath}
      />
      <Army
        startX={region.armyStartX}
        startY={region.armyStartY}
        units={props.army}
      />
    </g>
  );
};

// @ts-ignore
export const connectStore = store => (id, Component) => observer(({ showControls }) => 
    <Component
      owner={store.regions[id].owner}
      army={store.regions[id].army}
      //@ts-ignore
      showControls={({ x, y }) => showControls({ currentRegion: id, x, y })}
    />
)