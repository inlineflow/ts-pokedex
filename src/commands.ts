import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";

export function getCommands() {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Provides info on usage",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description: "Advances 20 location-areas forwards",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Moves 20 location-areas backwards",
      callback: commandMapb,
    }
  }
}
