import { State } from "./state";
export async function commandMap(state: State) {
  const x = await state.poke.fetchLocations()
  console.log(x)
}
