import { State } from "./state";
export async function commandMap(state: State) {
  const x = await state.poke.fetchLocations()
  const locations = x.map(x => x.name);
  for (const loc of locations) {
    console.log('  ', loc)
  }
}
