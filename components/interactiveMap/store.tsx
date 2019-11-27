import { observable, action } from "mobx";
import { ArmyUnit, Owner } from "./types";

export class RegionStore {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  @observable
  army: ArmyUnit[] = [];

  @observable
  owner: Owner = "none";

  @action
  setOwner(owner: Owner) {
    this.owner = owner;
  }

  @action
  addUnit(unit: ArmyUnit) {
    this.army.push(unit);
  }

  @action
  removeUnit(unit: ArmyUnit) {
    const i = this.army.indexOf(unit);
    if (i) {
      this.army.splice(i, 1);
    }
  }
}

export class MapStore {
  regions: Record<string, RegionStore>;

  constructor(regions: string[]) {
    this.regions = regions.reduce((acc: Record<string, RegionStore>, name) => {
      acc[name] = new RegionStore(name);
      return acc;
    }, {});
  }
}
