import { State } from "./state";
export async function commandMapb(state: State) {
  const x = await state.poke.fetchLocations(state.poke.previous?.toString())
  const locations = x.map(loc => loc.name);
  console.log(locations);
}
