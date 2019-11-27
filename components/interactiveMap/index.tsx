import React, { useState } from "react";
import * as regions from "./regions";
import withOwner, { connectStore } from "./region";

import "./styles.css";
import { Owner, ArmyUnit } from "./types";
import { MapStore } from "./store";

const store = new MapStore(Object.keys(regions));
const maped = Object.entries(regions).map(([id, declaration]) => {
  const Component = withOwner(declaration);
  return connectStore(store)(id, Component);
});

interface Props {
  setRegionOwner(id: string, owner: Owner): any;
  addUnit(id: string, unit: ArmyUnit): any;
  removeUnit(id: string, unit: ArmyUnit): any;
}
const Map = (props: Props) => {
  const [currentTooltip, setTooltip] = useState<{
    x: string;
    y: string;
    currentRegion: string;
  } | null>(null);

  return (
    <div style={{ position: "relative", display: "block" }}>
      <img
        src="/images/board.jpg"
        style={{ display: "block", maxWidth: "100%", height: "auto" }}
      />
      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <svg
          style={{ width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1464px"
          height="2174px"
          viewBox="0 0 1464 2175"
        >
          {maped.map((Comp, i) => (
            // @ts-ignore
            <Comp key={i} showControls={args => setTooltip(args)} />
          ))}
          {currentTooltip && (
            <foreignObject
              style={{
                width: "420px",
                height: "420px",
                // @ts-ignore
                x: currentTooltip.x,
                // @ts-ignore
                y: currentTooltip.y,
                color: "black",
              }}
            >
              <Tooltip
                id={currentTooltip.currentRegion}
                setOwner={(owner: Owner) =>
                  props.setRegionOwner(currentTooltip.currentRegion, owner)
                }
                addUnit={(unit: ArmyUnit) =>
                  props.addUnit(currentTooltip.currentRegion, unit)
                }
                removeUnit={(unit: ArmyUnit) =>
                  props.removeUnit(currentTooltip.currentRegion, unit)
                }
                onClose={() => setTooltip(null)}
              />
              />
            </foreignObject>
          )}
          }
        </svg>
      </div>
    </div>
  );
};

const OwnerButton = ({ owner, onClick }: { owner: Owner; onClick(): any }) => {
  return (
    <a
      style={{
        display: "block",
        height: "80px",
        width: "80px",
        backgroundImage: `url(/images/House_${owner}.svg)`,
        backgroundSize: "80px"
      }}
      onClick={onClick}
    />
  );
};

const UnitControls = ({
  unit,
  addUnit,
  removeUnit
}: {
  unit: ArmyUnit;
  addUnit(): any;
  removeUnit(): any;
}) => (
  <div>
    <div> {unit}</div>
    <button onClick={addUnit}> + </button>
    <button onClick={removeUnit}> - </button>
  </div>
);

const RegionConstrols = ({
  owner,
  army,
  setOwner,
  addUnit,
  removeUnit,
  onClose
}: {
  owner: Owner;
  army: ArmyUnit[];
  setOwner(o: Owner): any;
  addUnit(u: ArmyUnit): any;
  removeUnit(u: ArmyUnit): any;
  onClose(): any;
}) => (
  <div
    style={{
      width: "400px",
      height: "400px",
      backgroundColor: "white",
      boxShadow: '10px 10px 10px black'
    }}
  >
    <div
      style={{
        height: "200px",
        maxHeight: '200px',
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div>Owner</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "center",
          maxHeight: '200px',
        }}
      >
        {([
          "stark",
          "tyrell",
          "greyjoy",
          "lanister",
          "baratheon",
          "martell",
          "none"
        ] as Owner[]).map(owner => (
          <OwnerButton
            key={owner}
            owner={owner}
            onClick={() => setOwner(owner)}
          />
        ))}
      </div>
    </div>

    <div>Army</div>
    {(["knight", "soldier", "ship", "tower"] as ArmyUnit[]).map(unit => (
      <UnitControls
        unit={unit}
        addUnit={() => addUnit(unit)}
        removeUnit={() => removeUnit(unit)}
      />
    ))}
    <button onClick={onClose}> close </button>
  </div>
);

const connectTooltip = (store: MapStore) => (props: {
  id: string;
  setOwner(o: Owner): any;
  addUnit(u: ArmyUnit): any;
  removeUnit(u: ArmyUnit): any;
  onClose(): any;
}) => (
  <RegionConstrols
    army={store.regions[props.id].army}
    owner={store.regions[props.id].owner}
    {...props}
  />
);

const Tooltip = connectTooltip(store);

export default () => {
  return (
    <Map
      setRegionOwner={(id, owner) => store.regions[id].setOwner(owner)}
      addUnit={(id, unit) => store.regions[id].addUnit(unit)}
      removeUnit={(id, unit) => store.regions[id].removeUnit(unit)}
    />
  );
};
