export type ArmyUnit =
  'soldier' |
  'knight'|
  'tower'|
  'ship'

  export type Owner =  "stark" | "lanister" | "tyrell" | "martel" | "baratheon" | "greyjoy" | 'none';

export interface RegionProps {
  owner: Owner;
  army: ArmyUnit[]
  onClick(): any
}
