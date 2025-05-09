import { State } from "./state";
export async function commandMapb(state: State) {
  if (state.poke.previous === null) {
    console.log("you're on the first page")
    return;
  }

  const x = await state.poke.fetchLocations(state.poke.previous?.toString())
  const locations = x.map(loc => loc.name);
  for (const loc of locations) {
    console.log('  ', loc)
  }
}
