export type ArmyUnit =
  'soldier' |
  'knight'|
  'tower'|
  'ship'

export interface RegionProps {
  owner: "stark" | "lanister" | "tyrell" | "martel" | "baratheon" | "greyjoy";
  army: ArmyUnit[]
  onClick(): any
}
