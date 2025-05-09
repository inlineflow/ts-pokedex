import { PokeAPI } from "./pokeapi.js";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "",
    expected: [
      "canalave-city-area",
      "eterna-city-area",
      "pastoria-city-area",
      "sunyshore-city-area",
      "sinnoh-pokemon-league-area",
      "oreburgh-mine-1f",
      "oreburgh-mine-b1f",
      "valley-windworks-area",
      "eterna-forest-area",
      "fuego-ironworks-area",
      "mt-coronet-1f-route-207",
      "mt-coronet-2f",
      "mt-coronet-3f",
      "mt-coronet-exterior-snowfall",
      "mt-coronet-exterior-blizzard",
      "mt-coronet-4f",
      "mt-coronet-4f-small-room",
      "mt-coronet-5f",
      "mt-coronet-6f",
      "mt-coronet-1f-from-exterior",
    ],
  }
])("PokeAPI.fetchLocations()", ({ input, expected }) => {
  test(`Expected: ${expected}`, async () => {
    const poke = new PokeAPI();
    const locations = await poke.fetchLocations()
    const actual = locations.map(loc => loc.name);

    for (let i = 0; i < expected.length; i++) {
      expect(actual[i]).toBe(expected[i]);
    }
  })
});
