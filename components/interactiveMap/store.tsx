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
    if (owner === 'none') {
        this.army = [];
    }
  }

  @action
  addUnit(unit: ArmyUnit) {
    // лимит снабжения - 4, нельзя больше юнитов в одном месте иметь
    if (this.army.length >= 4) {
      return;
    }

    this.army.push(unit);
  }

  @action
  removeUnit(unit: ArmyUnit) {
    const i = this.army.findIndex(u => unit === u);
    if (i !== -1) {
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
