import { ArmyUnit } from "../types";
import Knight from "./Knight";
import Soldier from "./Soldier";
import Catapult from "./Catapult";
import Ship from "./Ship";

export interface Props {
  x?: string | number;
  y?: string | number;
  size: number;
  unit: ArmyUnit;
}

export default function t(props: Props) {
  switch (props.unit) {
    case "knight":
      return <Knight {...props} />;
    case "soldier":
      return <Soldier {...props} />;
    case "tower":
      return <Catapult {...props} />;
    case "ship":
      return <Ship {...props} />;
  }
}
