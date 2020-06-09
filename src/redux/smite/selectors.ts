import { State } from "../types";

export type StateJustSmite = Pick<State, "smite">;

export const selectAllGodNames = (state: StateJustSmite): Array<string> =>
  state.smite.gods.map(({ Name }: { Name: string }) => Name);

export const selectGodData = (state: StateJustSmite, godName: string) =>
  state.smite.gods.find(({ Name }: { Name: string }) => Name === godName);

const selectAbilityData = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => {
  return state.smite.gods.find(({ Name }: { Name: string }) => Name === godName)[
    `Ability_${abilityIndex}` as
      | "Ability_1"
      | "Ability_2"
      | "Ability_3"
      | "Ability_4"
      | "Ability_5"
  ];
};

export const selectGodIcon = (state: StateJustSmite, godName: string): string =>
  selectGodData(state, godName).godIcon_URL;

export const selectGodCardUrl = (state: StateJustSmite, godName: string): string =>
  selectGodData(state, godName).godCard_URL;

export const selectGodAbilityImageUrl = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).URL;

export const selectGodAbilityName = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Summary;

export const selectGodAbilityCooldown = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Description.itemDescription.cooldown;

export const selectGodAbilityCost = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) => selectAbilityData(state, godName, abilityIndex).Description.itemDescription.cost;

export const selectGodAbilityDescription = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.description;

export const selectGodAbilityStats = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.rankitems;

export const selectGodAbilityStatsMore = (
  state: StateJustSmite,
  godName: string,
  abilityIndex: number,
) =>
  selectAbilityData(state, godName, abilityIndex).Description.itemDescription.menuitems;

export const selectSmiteSearchTerm = (state: StateJustSmite) => state.smite.search.term;