import type { State } from "./state.js";

export function startREPL(state: State) {
  state.io.prompt()
  state.io.on("line", async (input) => {
    try {
      const words = cleanInput(input);
      if (words.length === 0) {
        state.io.prompt()
        //return
      }

      //console.log(`Your command was: ${words[0]}`)
      const command = state.commands[words[0]]
      await command.callback(state)
      state.io.prompt()
    }
    catch (e) {
      console.log(e)
    }
  });



}

export function cleanInput(input: string): string[] {
  return input.trim().split(' ').filter(el => el != '').map(word => word.toLowerCase());
}



