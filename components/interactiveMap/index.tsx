import React, { useState, useRef } from "react";
import * as regions from "./regions";
import withOwner, { connectStore } from "./region";
import Unit from "./units/Unit";
import "./styles.css";
import { Owner, ArmyUnit } from "./types";
import { MapStore } from "./store";
import { observer } from "mobx-react";

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
    x: number;
    y: number;
    currentRegion: string;
  } | null>(null);

  const svgRef = useRef<React.ReactSVG>(null);
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
          // @ts-ignore
          ref={svgRef}
          style={{ width: "100%", height: "100%" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1464px"
          height="2174px"
          viewBox="0 0 1464 2175"
        >
          {maped.map((Comp, i) => (
            <Comp
              key={i}
              // @ts-ignore
              showControls={({ currentRegion, x, y }) => {
                console.log(svgRef);

                const {
                  left: svgX,
                  top: svgY,
                  width: svgWidth,
                  height: svgHeight
                  // @ts-ignore ts говорит что возможно null и не знает что у свг элементов есть getBoundingClientRect
                } = svgRef.current.getBoundingClientRect();

                setTooltip({
                  currentRegion,
                  // приводим координату клика чтобы она была не относителньо страницы а относительно svg канваса, а затем масштабируем реальные пиксели к размеру viewbox svg
                  x: ((x - svgX - window.pageXOffset) * 1461) / svgWidth,
                  y: ((y - svgY - window.pageYOffset) * 2174) / svgHeight
                });
              }}
            />
          ))}
          {currentTooltip && (
            <foreignObject
              style={{
                width: "420px",
                height: "420px",
                // @ts-ignore
                x: currentTooltip.x + "px",
                // @ts-ignore
                y: currentTooltip.y + "px",
                color: "black"
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
  removeUnit,
  owner,
  currentCount
}: {
  unit: ArmyUnit;
  addUnit(): any;
  removeUnit(): any;
  owner: Owner;
  currentCount: number;
}) => (
  <div>
    <Unit owner={owner} size={80} unit={unit} />
    <div
      style={{
        display: "flex-inline",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <button style={{ height: "35px", width: "35px" }} onClick={addUnit}>
        +
      </button>
      <button style={{ height: "35px", width: "35px" }} onClick={removeUnit}>
        -
      </button>
    </div>
    <div style={{ fontSize: "40px" }}> {currentCount}</div>
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
      boxShadow: "10px 10px 10px black"
    }}
  >
    <div
      style={{
        display: "flex",
        fontSize: "25px",
        justifyContent: "flex-end",
        width: "100%"
      }}
    >
      <span onClick={onClose}> ❌ </span>
    </div>
    <div
      style={{
        height: "200px",
        maxHeight: "200px",
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
          maxHeight: "200px"
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "200px"
      }}
    >
      {(["knight", "soldier", "ship", "tower"] as ArmyUnit[]).map(unit => (
        <UnitControls
          unit={unit}
          addUnit={() => addUnit(unit)}
          removeUnit={() => removeUnit(unit)}
          owner={owner}
          currentCount={army.filter(u => u === unit).length}
        />
      ))}
    </div>
  </div>
);

const connectTooltip = (store: MapStore) =>
  observer(
    (props: {
      id: string;
      setOwner(o: Owner): any;
      addUnit(u: ArmyUnit): any;
      removeUnit(u: ArmyUnit): any;
      onClose(): any;
    }) => (
      <RegionConstrols
        army={store.regions[props.id].army.slice()}
        owner={store.regions[props.id].owner}
        {...props}
      />
    )
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
