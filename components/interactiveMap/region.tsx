import React, { useState } from "react";
import Army from "./army";

const ownersArr = [
  "stark",
  "tyrell",
  "grayjoy",
  "lanister",
  "baratheon",
  "martell",
  ""
];
interface RegionDeclaration {
  id: string;
  armyStartX: number | string;
  armyStartY: number | string;
  svgPath: string;
}

export default (region: RegionDeclaration) => () => {
  const [owner, setOwner] = useState("");
  return (
    <g className={`region _${owner}`}>
      <path
        className="region__form"
        onClick={() =>
          setOwner((currentOwner: any) => {
            return ownersArr[
              (ownersArr.indexOf(currentOwner) + 1) % ownersArr.length
            ];
          })
        }
        id={region.id}
        fill="currentColor"
        stroke="black"
        strokeWidth="1"
        d={region.svgPath}
      />
      <Army startX={region.armyStartX} startY={region.armyStartY} />
    </g>
  );
};
