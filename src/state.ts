import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
}

export type State = {
  commands: Record<string, CLICommand>;
  io: Interface;
  poke: PokeAPI;
}
export function initState(): State {
  const rl = createInterface(
    {
      input: process.stdin,
      output: process.stdout,
      prompt: "Pokedex >",
    }
  )

  const commands = getCommands();
  const poke = new PokeAPI();


  return { commands: commands, io: rl, poke: poke }
}
